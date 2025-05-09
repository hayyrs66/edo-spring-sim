/**
 * Implementación de bloques funcionales similares a Simulink para el sistema masa-resorte
 * Estos bloques permiten una construcción modular del sistema de simulación
 */

/**
 * Bloque Sumador: Combina múltiples señales de entrada
 * @param {Array<number|function>} inputs - Array de valores numéricos o funciones que retornan números
 * @param {Array<number>} gains - Factores de ganancia para cada entrada (1 por defecto para suma, -1 para resta)
 * @returns {function} - Función que calcula la suma ponderada de las entradas en tiempo t
 */
export function createSumBlock(inputs = [], gains = []) {
  // Si no se proveen ganancias, asumimos 1 para todas las entradas
  const effectiveGains = gains.length === inputs.length 
    ? gains 
    : Array(inputs.length).fill(1);

  return (t) => {
    let sum = 0;
    
    for (let i = 0; i < inputs.length; i++) {
      // Si la entrada es una función, la evaluamos en tiempo t
      const inputValue = typeof inputs[i] === 'function' ? inputs[i](t) : inputs[i];
      sum += inputValue * effectiveGains[i];
    }
    
    return sum;
  };
}

/**
 * Bloque Ganancia: Multiplica una señal de entrada por un factor constante
 * @param {number|function} input - Valor numérico o función que retorna un número
 * @param {number} gainFactor - Factor de ganancia
 * @returns {function} - Función que calcula la entrada amplificada en tiempo t
 */
export function createGainBlock(input, gainFactor = 1) {
  return (t) => {
    const inputValue = typeof input === 'function' ? input(t) : input;
    return inputValue * gainFactor;
  };
}

/**
 * Bloque Integrador: Integra numéricamente una señal de entrada
 * @param {function} input - Función que representa la señal a integrar
 * @param {number} initialValue - Valor inicial del integrador
 * @param {number} timeStep - Paso de tiempo para la integración
 * @returns {function} - Función que retorna el valor integrado en tiempo t
 */
export function createIntegratorBlock(input, initialValue = 0, timeStep = 0.01) {
  let accumulatedValue = initialValue;
  let lastTime = 0;
  
  return (t) => {
    // Si es la primera llamada o un reinicio, devolvemos el valor inicial
    if (t < lastTime) {
      accumulatedValue = initialValue;
      lastTime = t;
      return accumulatedValue;
    }
    
    // Calculamos cuántos pasos de integración necesitamos
    const steps = Math.max(1, Math.round((t - lastTime) / timeStep));
    const effectiveTimeStep = (t - lastTime) / steps;
    
    // Integramos numéricamente usando el método del trapecio
    for (let i = 0; i < steps; i++) {
      const t1 = lastTime + i * effectiveTimeStep;
      const t2 = t1 + effectiveTimeStep;
      
      const value1 = input(t1);
      const value2 = input(t2);
      
      // Regla del trapecio: ∫f(t)dt ≈ (f(t1) + f(t2)) * (t2 - t1) / 2
      accumulatedValue += (value1 + value2) * effectiveTimeStep / 2;
    }
    
    lastTime = t;
    return accumulatedValue;
  };
}

/**
 * Bloque Derivativo: Calcula la derivada numérica de una señal (opcional, no es un bloque estándar en el modelo)
 * @param {function} input - Función que representa la señal a derivar
 * @param {number} timeStep - Paso de tiempo para la derivación
 * @returns {function} - Función que retorna la derivada en tiempo t
 */
export function createDerivativeBlock(input, timeStep = 0.01) {
  let lastValue = null;
  let lastTime = null;
  
  return (t) => {
    // Si es la primera llamada, no podemos calcular derivada aún
    if (lastValue === null) {
      lastValue = input(t);
      lastTime = t;
      return 0; // Asumimos derivada inicial cero
    }
    
    const currentValue = input(t);
    const derivative = (currentValue - lastValue) / (t - lastTime);
    
    lastValue = currentValue;
    lastTime = t;
    
    return derivative;
  };
}

/**
 * Bloque Escalón (Step): Genera una señal de entrada tipo escalón
 * @param {number} stepTime - Tiempo en el que ocurre el escalón
 * @param {number} initialValue - Valor inicial antes del escalón
 * @param {number} finalValue - Valor final después del escalón
 * @returns {function} - Función que retorna el valor del escalón en tiempo t
 */
export function createStepBlock(stepTime, initialValue = 0, finalValue = 1) {
  return (t) => {
    if (t < stepTime) return initialValue;
    return finalValue;
  };
}

/**
 * Bloque Scope: Almacena los valores de una señal para visualización
 * @param {function} input - Función que representa la señal a visualizar
 * @param {number} startTime - Tiempo inicial de la simulación
 * @param {number} stopTime - Tiempo final de la simulación
 * @param {number} sampleRate - Frecuencia de muestreo (muestras por unidad de tiempo)
 * @returns {Array} - Array de objetos { time, value } para graficar
 */
export function createScopeData(input, startTime = 0, stopTime = 10, sampleRate = 100) {
  const timeStep = 1 / sampleRate;
  const numSamples = Math.ceil((stopTime - startTime) * sampleRate) + 1;
  const data = [];
  
  for (let i = 0; i < numSamples; i++) {
    const t = startTime + i * timeStep;
    if (t > stopTime) break;
    
    data.push({
      time: t,
      value: input(t)
    });
  }
  
  return data;
}

/**
 * Ensambla un sistema completo de masa-resorte utilizando los bloques funcionales
 * @param {object} params - Parámetros del sistema
 * @param {number} params.mass - Masa (kg)
 * @param {number} params.springConstant - Constante del resorte (N/m)
 * @param {number} params.dampingConstant - Constante de amortiguación (N·s/m)
 * @param {number} params.stepTime - Tiempo en el que ocurre el escalón
 * @param {number} params.initialValue - Valor inicial de la entrada
 * @param {number} params.finalValue - Valor final de la entrada
 * @param {number} params.initialPosition - Posición inicial (m)
 * @param {number} params.initialVelocity - Velocidad inicial (m/s)
 * @returns {object} - Bloque de salida que proporciona la posición y velocidad en tiempo t
 */
export function createSpringMassSystem(params) {
  const {
    mass,
    springConstant,
    dampingConstant = 0,
    stepTime = 1,
    initialValue = 0,
    finalValue = 1,
    initialPosition = 0,
    initialVelocity = 0
  } = params;
  
  // 1. Bloque de entrada escalón
  const inputForce = createStepBlock(stepTime, initialValue, finalValue);
  
  // Variables para la recursión (sistema retroalimentado)
  let positionFn;
  let velocityFn;
  
  // 2. Bloque de suma para calcular la aceleración: (F - kx - bv) / m
  const accelerationFn = (t) => {
    // Aseguramos que positionFn y velocityFn estén definidos (serán definidos después de esta función)
    if (!positionFn || !velocityFn) return 0;
    
    const force = inputForce(t);
    const springForce = springConstant * positionFn(t);
    const dampingForce = dampingConstant * velocityFn(t);
    
    return (force - springForce - dampingForce) / mass;
  };
  
  // 3. Bloque integrador para velocidad: ∫a dt
  velocityFn = createIntegratorBlock(accelerationFn, initialVelocity);
  
  // 4. Bloque integrador para posición: ∫v dt
  positionFn = createIntegratorBlock(velocityFn, initialPosition);
  
  // 5. Devuelve un objeto con funciones para obtener posición y velocidad
  return {
    getPosition: positionFn,
    getVelocity: velocityFn,
    getAcceleration: accelerationFn,
    getInputForce: inputForce
  };
}