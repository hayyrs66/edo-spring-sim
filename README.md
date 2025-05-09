# EDO-SPRING-SIM: Simulación de Sistema Masa-Resorte

Este proyecto es una adaptación web de una simulación del sistema masa-resorte tradicionalmente implementada en Simulink de Matlab. La aplicación permite visualizar y comprender el comportamiento de sistemas masa-resorte amortiguados y no amortiguados.

## Descripción del Proyecto

La aplicación simula diferentes casos de sistemas masa-resorte:
- Sistema masa-resorte no amortiguado
- Sistema masa-resorte amortiguado, con tres posibles casos:
  - Sobreamortiguado
  - Subamortiguado
  - Amortiguamiento crítico

## Plan de Implementación

### Fase 1: Configuración Básica de la Interfaz ✅
- [x] Crear estructura básica de la aplicación Next.js
- [x] Implementar componentes UI básicos (Cards, Buttons, etc.)
- [x] Diseñar layout principal con áreas para simulación y gráfica
- [X] Implementar interfaz adicional si se requiere según las siguientes fases.

### Fase 2: Modelado Matemático ✅
- [x] Implementar las ecuaciones diferenciales del sistema masa-resorte
- [x] Crear un solucionador numérico (método de Runge-Kutta o similar)
- [x] Adaptar el concepto de bloques de Simulink a funciones JavaScript:
  - [x] Bloque Add → Función de suma (`createSumBlock`)
  - [x] Bloques Integrator → Funciones de integración numérica (`createIntegratorBlock`)
  - [x] Bloques Gain → Multiplicadores para parámetros (`createGainBlock`)
  - [x] Scope → Visualización usando biblioteca de gráficos (`createScopeData`)
  - [x] Step → Generador de entrada escalón (`createStepBlock`)

### Fase 3: Visualización Interactiva ⏳
- [ ] Integrar una biblioteca de gráficos (Chart.js, D3.js o similar)
- [ ] Implementar visualización en tiempo real del sistema
- [ ] Crear animación del sistema masa-resorte
- [ ] Mostrar la gráfica de desplazamiento vs. tiempo

### Fase 4: Panel de Control ⏳
- [ ] Añadir controles de entrada para los parámetros:
  - [ ] Masa (m)
  - [ ] Constante de amortiguación (b)
  - [ ] Constante del resorte (k)
  - [ ] Parámetros de la entrada escalón (Step time, Initial Value, Final Value)
  - [ ] Tiempo de simulación (Stop time)
- [ ] Implementar selector de tipo de sistema (amortiguado/no amortiguado)
- [ ] Añadir botones para iniciar, pausar y reiniciar la simulación

### Fase 5: Detección Automática de Casos ⏳
- [ ] Implementar algoritmo para determinar tipo de amortiguamiento
- [ ] Mostrar indicador visual de tipo de amortiguamiento (Sobreamortiguado, Subamortiguado, o Crítico)
- [ ] Mostrar valores calculados de frecuencia natural, factor de amortiguamiento, etc.

### Fase 6: Casos de Prueba ⏳
Implementar presets para los ejercicios de prueba mencionados en el enunciado:

1. **Caso 1:**
   - m = 10 Kg, b = 0.4, k = 0.16 N/m
   - Step time = 1, Initial Value = 0.025, Final Value = 0, Stop time = 300

2. **Caso 2 (No amortiguado):**
   - m = 4 Kg, k = 16 N/m
   - Step time = 1, Initial Value = 1, Final Value = 0, Stop time = 10

3. **Caso 3:**
   - m = 10 Kg, b = 0.2, k = 0.04 N/m
   - Step time = 1, Initial Value = 0.025, Final Value = 0, Stop time = 300

4. **Caso 4:**
   - m = 150 Kg, b = 4.5, k = 0.03 N/m
   - Step time = 1, Initial Value = 1, Final Value = 0.025, Stop time = 1000

5. **Caso 5:**
   - m = 50 Kg, b = 2, k = 0.02 N/m
   - Step time = 1, Initial Value = 1, Final Value = 0.025, Stop time = 1000

### Fase 7: Valor Agregado (Extra) ⏳
- [ ] Exportación de datos a CSV
- [ ] Comparación simultánea de diferentes configuraciones
- [ ] Visualización 3D del sistema
- [ ] Modo "paso a paso" para fines educativos
- [ ] Análisis de respuesta en frecuencia

## Tecnologías Utilizadas

- **Framework**: Next.js
- **Frontend**: React
- **Estilos**: Tailwind CSS
- **Matemáticas**: Math.js o similar para cálculos numéricos
- **Gráficos**: Chart.js, D3.js o biblioteca similar
- **Física**: Implementación personalizada de ecuaciones diferenciales

## Ecuaciones Fundamentales

### Sistema Masa-Resorte No Amortiguado
```
m * (d²x/dt²) + k * x = F(t)
```

### Sistema Masa-Resorte Amortiguado
```
m * (d²x/dt²) + b * (dx/dt) + k * x = F(t)
```

Donde:
- m: masa (kg)
- b: constante de amortiguación (N·s/m)
- k: constante del resorte (N/m)
- x: desplazamiento (m)
- F(t): fuerza externa aplicada (N)

## Fuentes de Información Adicional

- [Oscilaciones amortiguadas (GIE)](http://laplace.us.es/wiki/index.php/Oscilaciones_amortiguadas_(GIE))
