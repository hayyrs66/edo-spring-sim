/**
 * Implementación de las ecuaciones diferenciales para sistemas masa-resorte
 * Basado en la teoría de osciladores armónicos simples y amortiguados
 */

/**
 * Constantes para identificación del tipo de amortiguamiento
 */
export const DAMPING_TYPES = {
  UNDAMPED: "undamped",      // No amortiguado (b = 0)
  UNDERDAMPED: "underdamped", // Subamortiguado (β < ω₀)
  CRITICALLY_DAMPED: "critically_damped", // Amortiguamiento crítico (β = ω₀)
  OVERDAMPED: "overdamped"    // Sobreamortiguado (β > ω₀)
};

/**
 * Calcula la frecuencia natural del sistema masa-resorte (ω₀)
 * @param {number} k - Constante del resorte (N/m)
 * @param {number} m - Masa (kg)
 * @returns {number} - Frecuencia natural (rad/s)
 */
export function calculateNaturalFrequency(k, m) {
  return Math.sqrt(k / m);
}

/**
 * Calcula el factor de amortiguamiento (β)
 * @param {number} b - Constante de amortiguación (N·s/m)
 * @param {number} m - Masa (kg)
 * @returns {number} - Factor de amortiguamiento (1/s)
 */
export function calculateDampingFactor(b, m) {
  return b / (2 * m);
}

/**
 * Calcula la frecuencia amortiguada del sistema (ω)
 * Solo aplica para sistemas subamortiguados
 * @param {number} omega0 - Frecuencia natural (rad/s)
 * @param {number} beta - Factor de amortiguamiento (1/s)
 * @returns {number} - Frecuencia amortiguada (rad/s)
 */
export function calculateDampedFrequency(omega0, beta) {
  // Para sistemas subamortiguados: ω = √(ω₀² - β²)
  return Math.sqrt(Math.max(0, omega0 * omega0 - beta * beta));
}

/**
 * Determina el tipo de amortiguamiento del sistema
 * @param {number} omega0 - Frecuencia natural (rad/s)
 * @param {number} beta - Factor de amortiguamiento (1/s)
 * @returns {string} - Tipo de amortiguamiento según DAMPING_TYPES
 */
export function determineDampingType(omega0, beta) {
  if (beta === 0) return DAMPING_TYPES.UNDAMPED;
  
  const ratio = beta / omega0;
  
  if (Math.abs(ratio - 1) < 1e-10) return DAMPING_TYPES.CRITICALLY_DAMPED;
  if (ratio < 1) return DAMPING_TYPES.UNDERDAMPED;
  return DAMPING_TYPES.OVERDAMPED;
}

/**
 * Calcula el estado del sistema masa-resorte en el tiempo t
 * @param {number} t - Tiempo (s)
 * @param {number} x0 - Posición inicial (m)
 * @param {number} v0 - Velocidad inicial (m/s)
 * @param {number} k - Constante del resorte (N/m)
 * @param {number} m - Masa (kg)
 * @param {number} b - Constante de amortiguación (N·s/m)
 * @returns {object} - { position, velocity }
 */
export function calculateSystemStateAtTime(t, x0, v0, k, m, b) {
  const omega0 = calculateNaturalFrequency(k, m);
  const beta = calculateDampingFactor(b, m);
  const dampingType = determineDampingType(omega0, beta);
  
  let position, velocity;

  switch (dampingType) {
    case DAMPING_TYPES.UNDAMPED:
      // x(t) = x₀·cos(ω₀t) + (v₀/ω₀)·sin(ω₀t)
      position = x0 * Math.cos(omega0 * t) + (v0 / omega0) * Math.sin(omega0 * t);
      // v(t) = -x₀·ω₀·sin(ω₀t) + v₀·cos(ω₀t)
      velocity = -x0 * omega0 * Math.sin(omega0 * t) + v0 * Math.cos(omega0 * t);
      break;
      
    case DAMPING_TYPES.UNDERDAMPED:
      // Caso subamortiguado (β < ω₀)
      const omega = calculateDampedFrequency(omega0, beta);
      // Calculamos constantes específicas para este caso
      const A = x0;
      const B = (v0 + beta * x0) / omega;
      // x(t) = e^(-βt) * [A·cos(ωt) + B·sin(ωt)]
      position = Math.exp(-beta * t) * (A * Math.cos(omega * t) + B * Math.sin(omega * t));
      // v(t) = Derivada de la posición
      velocity = -beta * position + 
                Math.exp(-beta * t) * (-A * omega * Math.sin(omega * t) + B * omega * Math.cos(omega * t));
      break;
      
    case DAMPING_TYPES.CRITICALLY_DAMPED:
      // Caso de amortiguamiento crítico (β = ω₀)
      // x(t) = (x₀ + (v₀ + β·x₀)·t) · e^(-βt)
      position = (x0 + (v0 + beta * x0) * t) * Math.exp(-beta * t);
      // v(t) = Derivada de la posición
      velocity = (v0 + beta * x0 - beta * x0 - beta * (v0 + beta * x0) * t) * Math.exp(-beta * t);
      break;
      
    case DAMPING_TYPES.OVERDAMPED:
      // Caso sobreamortiguado (β > ω₀)
      const lambda1 = -beta + Math.sqrt(beta * beta - omega0 * omega0);
      const lambda2 = -beta - Math.sqrt(beta * beta - omega0 * omega0);
      // Calculamos constantes específicas para sobreamortiguación
      const denom = lambda1 - lambda2;
      const C1 = (v0 - lambda2 * x0) / denom;
      const C2 = (-v0 + lambda1 * x0) / denom;
      // x(t) = C1·e^(λ₁t) + C2·e^(λ₂t)
      position = C1 * Math.exp(lambda1 * t) + C2 * Math.exp(lambda2 * t);
      // v(t) = Derivada de la posición
      velocity = C1 * lambda1 * Math.exp(lambda1 * t) + C2 * lambda2 * Math.exp(lambda2 * t);
      break;
  }
  
  return { position, velocity };
}

/**
 * Implementa un paso del algoritmo de Runge-Kutta de 4to orden para resolver el sistema masa-resorte
 * @param {number} t - Tiempo actual (s)
 * @param {number} x - Posición actual (m)
 * @param {number} v - Velocidad actual (m/s)
 * @param {number} dt - Incremento de tiempo (s)
 * @param {number} k - Constante del resorte (N/m)
 * @param {number} m - Masa (kg)
 * @param {number} b - Constante de amortiguación (N·s/m)
 * @param {function} Ft - Función que retorna la fuerza externa en tiempo t
 * @returns {object} - { newPosition, newVelocity }
 */
export function rungeKutta4Step(t, x, v, dt, k, m, b, Ft = () => 0) {
  // Define las ecuaciones diferenciales
  const dxdt = (t, x, v) => v;
  const dvdt = (t, x, v) => (-k * x - b * v + Ft(t)) / m;

  // Paso 1: Calcula k1
  const k1x = dxdt(t, x, v);
  const k1v = dvdt(t, x, v);

  // Paso 2: Calcula k2
  const k2x = dxdt(t + dt/2, x + dt*k1x/2, v + dt*k1v/2);
  const k2v = dvdt(t + dt/2, x + dt*k1x/2, v + dt*k1v/2);

  // Paso 3: Calcula k3
  const k3x = dxdt(t + dt/2, x + dt*k2x/2, v + dt*k2v/2);
  const k3v = dvdt(t + dt/2, x + dt*k2x/2, v + dt*k2v/2);

  // Paso 4: Calcula k4
  const k4x = dxdt(t + dt, x + dt*k3x, v + dt*k3v);
  const k4v = dvdt(t + dt, x + dt*k3x, v + dt*k3v);

  // Calcula el siguiente estado
  const newPosition = x + (dt/6) * (k1x + 2*k2x + 2*k3x + k4x);
  const newVelocity = v + (dt/6) * (k1v + 2*k2v + 2*k3v + k4v);

  return { newPosition, newVelocity };
}

/**
 * Genera una función de entrada escalón
 * @param {number} stepTime - Tiempo en el que ocurre el escalón
 * @param {number} initialValue - Valor inicial
 * @param {number} finalValue - Valor final
 * @returns {function} - Función que retorna el valor de la entrada en tiempo t
 */
export function createStepInput(stepTime, initialValue, finalValue) {
  return (t) => {
    if (t < stepTime) return initialValue;
    return finalValue;
  };
}

/**
 * Simula el sistema masa-resorte usando el método Runge-Kutta
 * @param {object} params - Parámetros de la simulación
 * @param {number} params.mass - Masa (kg)
 * @param {number} params.springConstant - Constante del resorte (N/m)
 * @param {number} params.dampingConstant - Constante de amortiguación (N·s/m)
 * @param {number} params.stepTime - Tiempo en el que ocurre el escalón
 * @param {number} params.initialValue - Valor inicial de la entrada
 * @param {number} params.finalValue - Valor final de la entrada
 * @param {number} params.stopTime - Tiempo total de la simulación
 * @param {number} params.initialPosition - Posición inicial del sistema (por defecto 0)
 * @param {number} params.initialVelocity - Velocidad inicial del sistema (por defecto 0)
 * @param {number} params.timeStep - Incremento de tiempo para la simulación (por defecto 0.01)
 * @returns {Array} - Array de objetos { time, position, velocity }
 */
export function simulateSystem(params) {
  const {
    mass,
    springConstant,
    dampingConstant = 0,
    stepTime,
    initialValue,
    finalValue,
    stopTime,
    initialPosition = 0,
    initialVelocity = 0,
    timeStep = 0.01
  } = params;

  // Crea la función de entrada escalón
  const stepInput = createStepInput(stepTime, initialValue, finalValue);
  
  // Función de fuerza externa
  const externalForce = (t) => stepInput(t);
  
  // Inicialización de variables
  let time = 0;
  let position = initialPosition;
  let velocity = initialVelocity;
  
  // Array para almacenar resultados
  const results = [{ time, position, velocity }];
  
  // Simula hasta el tiempo de parada
  while (time < stopTime) {
    // Avanza un paso de tiempo con Runge-Kutta
    const { newPosition, newVelocity } = rungeKutta4Step(
      time, position, velocity, timeStep, 
      springConstant, mass, dampingConstant, externalForce
    );
    
    // Actualiza el estado
    time += timeStep;
    position = newPosition;
    velocity = newVelocity;
    
    // Almacena el resultado
    results.push({ time, position, velocity });
  }
  
  return results;
}