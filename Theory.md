Proyecto: Simulación del sistema masa-resorte utilizando Simulink de Matlab (Adaptado a Web con Nextjs)
Objetivo:
Simular un sistema masa resorte no amortiguado y un sistema masa-resorte amortiguado
utilizando la herramienta Simulink de Matlab.
La simulación será capaz de identificar los casos de amortiguación siguientes: Sobre amortiguado,
Sub amortiguado y Amortiguamiento Crítico esenciales para los estudiantes de Ingeniería Mecánica y
Civil.
http://laplace.us.es/wiki/index.php/Oscilaciones_amortiguadas_(GIE)
Descripción:
El proyecto del curso Ecuaciones diferenciales el estudiante desarrolla la simulación de un sistema
masa resorte, utilizando Simulink de Matlab capaz de identificar los casos de amortiguación descritos en
el objetivo.
El diseño del modelo base se requieren los siguientes bloques
1 bloque Add
2 bloques Integrator
3 bloques Gain
1 Scope
1 Step
Recursos de apoyo para el proyecto. 
1. Creación de usuario y contraseña en MathWorks por parte del estudiante (el estudiante debe
utilizar el correo de la Universidad)
2. Ir al sitio Matlab online.
3. Abrir la herramienta Simulink.
4. Creación de un modelo en blanco.
5. Construcción del modelo.
6. Videos en la web “sistema masa resorte simulink Matlab”
Aspectos para calificar:
➢ Simulador base 60% de la nota total
➢ Simulador que muestre el resultado con los casos de amortiguación 100%
➢ Simulador con un valor agregado (Puntos Extras)
Entrega del proyecto
Miércoles 21 de mayo en el portal, formato slx
Ejercicios de Prueba para validar el simulador
1. Luego se ejecuta el programa utilizando los valores: m = 10 Kg, b = 0.4 y k = 0.16 N/m y utilizando
una fuente Step con Step time = 1, Initial Value = 0.025, Final Value = 0 y Stop time = 300. El resultado
se muestra en el Scope.
2. Un modelo sistema masa-resorte no amortiguado con los valores: m = 4 Kg, y k = 16 N/m y
utilizando una fuente Step con Step time = 1, Initial Value = 1, Final Value = 0 y Stop time = 10. El
resultado se muestra en el Scope.
3. Un modelo sistema masa-resorte amortiguado con los valores: m = 10 Kg, b = 0.2 y k = 0.04 N/m y
utilizando una fuente Step con Step time = 1, Initial Value = 0.025, Final Value = 0 y Stop time = 300.
El resultado se muestra en el Scope. En las propiedades del Scope, en la parte Display tome
.
4. Un modelo sistema masa-resorte amortiguado con los valores: m = 150 Kg, b = 4.5 y k = 0.03 N/m y
utilizando una fuente Step con Step time = 1, Initial Value = 1, Final Value = 0.025 y Stop time =
1000. El resultado se muestra en el Scope. En las propiedades del Scope, en la parte Display tome
.
5. Un modelo sistema masa-resorte amortiguado con los valores: m = 50 Kg, b = 2 y k = 0.02 N/m y
utilizando una fuente Step con Step time = 1, Initial Value = 1, Final Value = 0.025 y Stop time =
1000. El resultado se muestra en el Scope. En las propiedades del Scope, en la parte Display tome
.



l oscilador no amortiguado
En otras secciones se estudia la cinemática y la dinámica del oscilador armónico. Éste es un sistema ideal gobernado por la ley de Hooke. Típicamente esta ley se aplica a resortes mecánicos, aunque puede generalizarse a muchas otras situaciones. En el caso de un resorte que oscila en una sola dimensión la ley de Hooke se escribe

F
=
−
k
x
{\displaystyle F=-kx\,}
siendo 
x
{\displaystyle x} la elongación del resorte (distancia respecto a la posición de equilibrio)

Una partícula sometida exclusivamente a la ley de Hooke en una dimensión cumple la ecuación de movimiento

m
a
=
−
k
x
→
a
=
x
¨
=
−
k
m
x
{\displaystyle ma=-kx\qquad \rightarrow \qquad a={\ddot {x}}=-{\frac {k}{m}}x}
Este es un caso particular de la ecuación para un movimiento armónico simple

x
¨
=
−
ω
0
2
x
{\displaystyle {\ddot {x}}=-\omega _{0}^{2}x}
siendo en este caso la frecuencia natural

ω
0
=
k
m
{\displaystyle \omega _{0}={\sqrt {\frac {k}{m}}}}
La solución general de esta ecuación diferencial es una oscilación sinusoidal

x
(
t
)
=
A
cos
⁡
(
ω
0
t
+
φ
)
{\displaystyle x(t)=A\cos(\omega _{0}t+\varphi )\,}

con 
A
{\displaystyle A} la amplitud de las oscilaciones, 
φ
{\displaystyle \varphi } la fase inicial o constante de fase. Este movimiento es periódico, de forma que

x
(
t
+
T
)
=
x
(
t
)
T
=
2
π
ω
{\displaystyle x(t+T)=x(t)\qquad \qquad T={\frac {2\pi }{\omega }}}
Esta solución también se puede escribir como una combinación lineal de un seno y un coseno

x
(
t
)
=
b
1
cos
⁡
(
ω
0
t
)
+
b
2
s
e
n
(
ω
0
t
)
{\displaystyle x(t)=b_{1}\cos(\omega _{0}t)+b_{2}\,\mathrm {sen} (\omega _{0}t)}
con

b
1
=
A
cos
⁡
(
φ
)
b
2
=
−
A
s
e
n
(
φ
)
{\displaystyle b_{1}=A\cos(\varphi )\qquad \qquad b_{2}=-A\,\mathrm {sen} (\varphi )}
Los valores de las constantes 
b
1
{\displaystyle b_{1}} y 
b
2
{\displaystyle b_{2}} pueden calcularse también a partir de las condiciones iniciales del movimiento

b
1
=
x
0
=
x
(
t
=
0
)
b
2
=
v
0
ω
0
=
v
(
t
=
0
)
ω
0
{\displaystyle b_{1}=x_{0}=x(t=0)\qquad \qquad b_{2}={\frac {v_{0}}{\omega _{0}}}={\frac {v(t=0)}{\omega _{0}}}}
Amortiguamiento
El modelo de un oscilador mecánico sometido exclusivamente a la ley de Hooke no es realista pues desprecia la presencia del rozamiento. La experiencia nos muestra que un oscilador se va frenando progresivamente hasta llegar a detenerse en la posición de equilibrio.

Esta disminución progresiva en la amplitud de las oscilaciones es debida a la presencia de rozamiento. Éste puede deberse a un roce con una superficie (rozamiento seco) o la fricción del aire o líquido que rodea al oscilador (rozamiento viscoso).

El caso del oscilador con rozamiento seco tiene un interesante análisis físico-matenático, pero no lo consideraremos aquí, sino en un problema. En su lugar nos centraremos en el caso del rozamiento viscoso. La razón es que, aparte de ser un modelo de muchas aplicaciones, representa más adecuadamente lo que ocurre en un amortiguador mecánico.

Un amortiguador es un dispositivo como el que puede encontrarse en la suspensión de un automóvil o en una puerta con cierre automático.


Un amortiguador consta de un resorte mecánico, pero también, en el interior de éste, de un cilindro con un pistón


Si un coche no tuviera suspensión (es decir, si el chasis estuviera unido rígidamente al eje de las ruedas), cada bache o irregularidad en el suelo se notaría como un golpe en el interior del vehículo lo cual, además de incómodo, pone en peligro su integridad. Por otro lado, si la suspensión consistiera simplemente en un resorte casi sin rozamiento, cada bache produciría oscilaciones en el coche, incluso mucho después de haber superado el bache.


Por ello, se introduce el amortiguador. El objetivo es que el coche oscile al pasar por el bache, pero lo menos posible, de forma que retorne a la posición de equilibro en el menor tiempo posible. Esto se consigue introduciendo una fricción viscosa que disipe la energía mecánica de la oscilación. En la práctica consiste en que un fluido es obligado a pasar por una serie de válvulas de un lado a otro del pistón, frenándolo en el proceso.

La fuerza de rozamiento que experimenta el resorte se opone siempre a la velocidad de éste (si la masa va hacia la derecha, la fuerza apunta hacia la izquierda y viceversa). En primera aproximación es proporcional a la velocidad (en reposo no hay fuerza de rozamiento), por lo que se puede escribir

F
→
=
−
γ
v
→
{\displaystyle {\vec {F}}=-\gamma {\vec {v}}}
y para el caso particular del movimiento rectilíneo

F
=
−
γ
v
=
−
γ
x
˙
{\displaystyle F=-\gamma v=-\gamma {\dot {x}}}
Ecuación del oscilador amortiguado
La segunda ley de Newton para un oscilador armónico con amortiguamiento viscoso (en una dimensión) se escribe entonces

m
a
=
−
k
x
−
γ
v
{\displaystyle ma=-kx-\gamma v\,}
Pasando todo al primer miembro

m
a
+
γ
v
+
k
x
=
0
{\displaystyle ma+\gamma v+kx=0\,}
Aplicando que la velocidad y la aceleración son las primera y segunda derivadas respecto al tiempo de la elongación nos queda la ecuación diferencial

m
x
¨
+
γ
x
˙
+
k
x
=
0
{\displaystyle m{\ddot {x}}+\gamma {\dot {x}}+kx=0}
Dividiendo por la masa de la partícula podemos escribirla como

x
¨
+
2
β
x
˙
+
ω
0
2
x
=
0
{\displaystyle {\ddot {x}}+2\beta {\dot {x}}+\omega _{0}^{2}x=0}
Esta es la ecuación diferencial del oscilador armónico amortiguado. La constante

ω
0
=
k
m
{\displaystyle \omega _{0}={\sqrt {\frac {k}{m}}}}
es la frecuencia propia del oscilador. Equivale a la frecuencia natural con la que oscilaría el resorte si no tuviera rozamiento. Como veremos, la presencia de rozamiento reduce la frecuencia de las oscilaciones.

La segunda constante

β
=
γ
2
m
{\displaystyle \beta ={\frac {\gamma }{2m}}}
es la constante de amortiguamiento. Mide la magnitud de la fricción, siendo mayor cuanto más intensa sea ésta.

Tanto la frecuencia propia 
ω
0
{\displaystyle \omega _{0}} como la constante de amortiguamiento 
β
{\displaystyle \beta } tienen dimensiones de inversa de un tiempo y se miden en s−1 en el SI.

Solución de la ecuación
Caracterización de las soluciones
Antes de examinar la solución matemática de la ecuación diferencial, podemos describir como deberían ser las soluciones.

Si el rozamiento es pequeño, debemos esperar que el resorte oscile paro con una amplitud decreciente, hasta que pasado un cierto tiempo se quede en reposo en la posición de equilibrio.
Si el rozamiento es muy grande, en cambio, esperamos que no llegue a oscilar, sino que simplemente se va moviendo lentamente hasta la posición de equilibrio.
En física siempre que una magnitud se considera grande o pequeña hay que decir comparada con qué, cuál es el patrón en que nos basamos para decir si algo es grande o pequeño. En este caso aprovechamos que tanto 
β
{\displaystyle \beta } como 
ω
0
{\displaystyle \omega _{0}} tienen las mismas dimensiones y por tanto se pueden comparar. Establecemos entonces el criterio

Rozamiento débil: 
β
<
ω
0
{\displaystyle \beta <\omega _{0}}
Rozamiento intenso: 
β
>
ω
0
{\displaystyle \beta >\omega _{0}}
La solución matemática debe reflejar por tanto un cambio de comportamiento dependiendo de como sea la constante de amortiguamiento comparada con la frecuencia propia.

Solución matemática
Debemos resolver la ecuación diferencial

x
¨
+
2
β
x
˙
+
ω
0
2
x
=
0
{\displaystyle {\ddot {x}}+2\beta {\dot {x}}+\omega _{0}^{2}x=0}
con ciertas condiciones iniciales

x
(
t
=
0
)
=
x
0
x
˙
(
t
=
0
)
=
v
0
{\displaystyle x(t=0)=x_{0}\qquad \qquad {\dot {x}}(t=0)=v_{0}}
Esta ecuación diferencial es de las llamadas lineales (la elongación y sus derivadas no están elevadas a ninguna potencia). Para buscar una solución de una ecuación de este tipo proponemos una solución exponencial

x
=
e
λ
t
{\displaystyle x=\mathrm {e} ^{\lambda t}\,}
Derivando esta función

x
˙
=
λ
e
λ
t
x
¨
=
λ
2
e
λ
t
{\displaystyle {\dot {x}}=\lambda \mathrm {e} ^{\lambda t}\qquad \qquad {\ddot {x}}=\lambda ^{2}\mathrm {e} ^{\lambda t}}
y sustituyendo en la ecuación diferencial

(
λ
2
+
2
β
λ
+
ω
0
2
)
e
λ
t
=
0
{\displaystyle \left(\lambda ^{2}+2\beta \lambda +\omega _{0}^{2}\right)\mathrm {e} ^{\lambda t}=0}
Puesto que la exponencial nunca puede anularse debe cumplirse que

λ
2
+
2
β
λ
+
ω
0
2
=
0
{\displaystyle \lambda ^{2}+2\beta \lambda +\omega _{0}^{2}=0\,}
Esta ya no es una ecuación diferencial. Es una ecuación de segundo grado cuyas soluciones nos dan los valores posibles de 
λ
{\displaystyle \lambda }. Puesto que existen dos valores, la solución de la ecuación diferencial se escribe como la combinación

x
(
t
)
=
c
1
e
λ
1
t
+
c
2
e
λ
2
t
{\displaystyle x(t)=c_{1}\mathrm {e} ^{\lambda _{1}t}+c_{2}\mathrm {e} ^{\lambda _{2}t}}
donde 
c
1
{\displaystyle c_{1}} y 
c
2
{\displaystyle c_{2}} son dos constantes cuyos valores se calculan a partir de las condiciones iniciales.

Resolviendo la ecuación de segundo grado nos quedan las soluciones

λ
1
=
−
β
+
β
2
−
ω
0
2
λ
2
=
−
β
−
β
2
−
ω
0
2
{\displaystyle \lambda _{1}=-\beta +{\sqrt {\beta ^{2}-\omega _{0}^{2}}}\qquad \qquad \lambda _{2}=-\beta -{\sqrt {\beta ^{2}-\omega _{0}^{2}}}}
Vemos que, como se dijo antes, dependiendo del valor de 
β
{\displaystyle \beta } hay tres posibilidades, dependiendo del signo de lo que hay dentro de la raíz cuadrada

Si 
β
>
ω
0
{\displaystyle \beta >\omega _{0}} las dos soluciones son reales y diferentes (caso sobreamortiguado).
Si 
β
=
ω
0
{\displaystyle \beta =\omega _{0}} existe una solución real doble (amortiguamiento crítico).
Si 
β
<
ω
0
{\displaystyle \beta <\omega _{0}} las dos soluciones son complejas conjugadas (caso subamortiguado).
Cada uno de estos casos merece un estudio por separado.

Caso sobreamortiguado (β > ω0)
Consideraremos en primer lugar el caso de rozamiento intenso

β
>
ω
0
{\displaystyle \beta >\omega _{0}\,}
En este caso las dos raíces de la ecuación son reales y además negativas

λ
1
=
−
β
+
β
2
−
ω
0
2
λ
2
=
−
β
−
β
2
−
ω
0
2
{\displaystyle \lambda _{1}=-\beta +{\sqrt {\beta ^{2}-\omega _{0}^{2}}}\qquad \qquad \lambda _{2}=-\beta -{\sqrt {\beta ^{2}-\omega _{0}^{2}}}}
(para ver que la primera es negativa basta con observar que la raíz es menor que 
β
{\displaystyle \beta }). La solución de la ecuación diferencial es entonces una suma de dos exponenciales decrecientes

x
(
t
)
=
c
1
e
−
|
λ
1
|
t
+
c
2
e
−
|
λ
2
|
t
{\displaystyle x(t)=c_{1}\mathrm {e} ^{-|\lambda _{1}|t}+c_{2}\mathrm {e} ^{-|\lambda _{2}|t}}
Puesto que 
|
λ
2
|
>
|
λ
1
|
{\displaystyle |\lambda _{2}|>|\lambda _{1}|} la segunda exponencial decae más rápidamente, y es la primera de las dos la que determina el tiempo en decaer.

Por dar un ejemplo numérico, supongamos que 
ω
0
=
1
s
−
1
{\displaystyle \omega _{0}=1\,\mathrm {s} ^{-1}} y que 
β
=
1.25
s
−
1
{\displaystyle \beta =1.25\,\mathrm {s} ^{-1}}. En ese caso resultan

λ
1
=
−
0.5
s
−
1
λ
1
=
−
2.0
s
−
1
{\displaystyle \lambda _{1}=-0.5\,\mathrm {s} ^{-1}\qquad \qquad \lambda _{1}=-2.0\,\mathrm {s} ^{-1}}
Esto quiere decir que la primera exponencial decae en un tiempo típico de 2 segundos (la inversa de 
λ
1
{\displaystyle \lambda _{1}}) mientras que la segunda lo hace en medio segundo, por tanto al cabo de un segundo prácticamente ya solo tenemos la primera exponencial.


La solución completa es la combinación de las dos aunque rápidamente se asemeja mucho a la primera


El caso de esta figura representa la situación en que se tira del oscilador y se libera desde el reposo (siendo nula su velocidad inicial, lo que corresponde a una tangente horizontal). El resorte tiende lentamente a la posición de equilibrio.

El que la solución sea una combinación de exponenciales decrecientes no quiere decir que la solución sea decreciente en todo instante. Por ejemplo, imaginemos el caso de un muelle que es golpeado en la posición de equilibrio. La masa se aleja originalmente de la posición de equilibrio, para luego retornar lentamente a ella.


Caso subamortiguado (β < ω0)
El caso opuesto al anterior lo obtenemos cuando el rozamiento es débil (incluyendo el caso en que no hay rozamiento).

Si llamamos

ω
=
ω
0
2
−
β
2
{\displaystyle \omega ={\sqrt {\omega _{0}^{2}-\beta ^{2}}}}
podemos escribir las dos soluciones de la ecuación de segundo grado como complejos conjugados

λ
1
=
−
β
+
j
ω
λ
2
=
−
β
−
j
ω
{\displaystyle \lambda _{1}=-\beta +\mathrm {j} \omega \qquad \qquad \lambda _{2}=-\beta -\mathrm {j} \omega \,}
siendo 
j
=
−
1
{\displaystyle \mathrm {j} ={\sqrt {-1}}} la unidad imaginaria. La solución general de la ecuación diferencial queda entonces

x
(
t
)
=
c
1
e
(
−
β
+
j
ω
)
t
+
c
2
e
(
−
β
−
j
ω
)
t
{\displaystyle x(t)=c_{1}\mathrm {e} ^{(-\beta +\mathrm {j} \omega )t}+c_{2}\mathrm {e} ^{(-\beta -\mathrm {j} \omega )t}\,}
Aquí podemos extraer como factor común la parte real de la exponencial y escribir

x
(
t
)
=
e
−
β
t
(
c
1
e
j
ω
t
+
c
2
e
−
j
ω
t
)
{\displaystyle x(t)=\mathrm {e} ^{-\beta t}\left(c_{1}\mathrm {e} ^{\mathrm {j} \omega t}+c_{2}\mathrm {e} ^{-\mathrm {j} \omega t}\right)}
Para ver que esta solución representa oscilaciones amortiguadas aplicamos la fórmula de Euler

e
j
ω
t
=
cos
⁡
(
ω
t
)
+
j
s
e
n
(
ω
t
)
{\displaystyle \mathrm {e} ^{\mathrm {j} \omega t}=\cos(\omega t)+\mathrm {j} \,\mathrm {sen} (\omega t)}
que transforma la solución en

x
(
t
)
=
e
−
β
t
(
b
1
cos
⁡
(
ω
t
)
+
b
2
s
e
n
(
ω
t
)
)
{\displaystyle x(t)=\mathrm {e} ^{-\beta t}\left(b_{1}\cos(\omega t)+b_{2}\,\mathrm {sen} (\omega t)\right)}
con

b
1
=
c
1
+
c
2
b
2
=
j
(
c
1
−
c
2
)
{\displaystyle b_{1}=c_{1}+c_{2}\qquad \qquad b_{2}=\mathrm {j} (c_{1}-c_{2})}
Esta combinación de senos y cosenos puede reducirse a uno solo, como se hace el caso del oscilador sin rozamiento, y escribir la solución en la forma

x
(
t
)
=
A
0
e
−
β
t
cos
⁡
(
ω
t
+
φ
)
{\displaystyle x(t)=A_{0}\mathrm {e} ^{-\beta t}\cos(\omega t+\varphi )}
Podemos leer esta solución como una oscilación sinusoidal

x
(
t
)
=
A
(
t
)
cos
⁡
(
ω
t
+
φ
)
{\displaystyle x(t)=A(t)\cos(\omega t+\varphi )}
con una amplitud que decae exponencialmente

A
(
t
)
=
A
0
e
−
β
t
{\displaystyle A(t)=A_{0}\mathrm {e} ^{-\beta t}\,}

Este comportamiento se dice cuasiperiódico, porque no llega a repetirse (al completar una oscilación no se encuentra en la misma posición que al iniciarla). El cuasiperiodo es mayor que el del oscilador sin rozamiento

ω
<
ω
0
⇒
T
=
2
π
ω
>
2
π
ω
0
=
T
0
{\displaystyle \omega <\omega _{0}\qquad \Rightarrow \qquad T={\frac {2\pi }{\omega }}>{\frac {2\pi }{\omega _{0}}}=T_{0}}
El tiempo que tarda en decaer la amplitud no los da el factor de decaimiento 
β
{\displaystyle \beta }. En un tiempo

τ
=
1
β
{\displaystyle \tau ={\frac {1}{\beta }}}
la amplitud se reduce en un factor e (a un 36.8% de la que tuviera). Tenemos entonces dos escalas de tiempo: 
T
0
{\displaystyle T_{0}} nos mide el tiempo que tarda en oscilar, 
τ
{\displaystyle \tau } el tiempo que tarda en amortiguarse. El cociente adimensional

τ
T
0
=
ω
0
2
π
β
{\displaystyle {\frac {\tau }{T_{0}}}={\frac {\omega _{0}}{2\pi \beta }}}
nos mide la importancia del amortiguamiento pues nos da el número de oscilaciones en un tiempo típico de decaimiento. Si este número es grande quiere decir que el oscilador es muy poco amortiguado.

Comparando las oscilaciones con y sin rozamiento vemos que si éste es pequeño se nota un cambio apreciable en la amplitud, pero muy pequeño en el peridoo


Si el rozamiento es grande, de forma que 
β
≃
ω
0
{\displaystyle \beta \simeq \omega _{0}} el decaimiento es muy importante y el periodo de oscilación es tan largo que prácticamente la partícula no llega a realizar ninguna oscilación.


En el ejemplo de la figura (
β
=
0.9
ω
0
{\displaystyle \beta =0.9\omega _{0}}) el primer mínimo está por debajo del eje solo -0.0006m y es inapreciable en la gráfica.

Amortiguamiento crítico (β = ω0)
El tercer caso es uno particular que debe seleccionarse modificando las propiedades del sistema, ya que requiere unos valores concretos de los parámetros. Para el caso del muelle con rozamiento debe cumplirse

β
=
ω
0
⇒
γ
2
m
=
k
m
⇒
γ
=
2
k
m
{\displaystyle \beta =\omega _{0}\qquad \Rightarrow \qquad {\frac {\gamma }{2m}}={\sqrt {\frac {k}{m}}}\qquad \Rightarrow \qquad \gamma =2{\sqrt {km}}}
La constante de rozamiento debe tener este valor exacto. Si es un poco mayor ya el movimiento es sobreamortiaguado; si es un poco menor, subamortiguado.

En el caso del amortiguamiento crítico, puede demostrarse que la solución es de la forma

x
(
t
)
=
(
c
1
+
c
2
t
)
e
−
β
t
{\displaystyle x(t)=(c_{1}+c_{2}t)\mathrm {e} ^{-\beta t}\,}
Gráficamente esta función presenta un decaimiento exponencial, similar al caso sobreamortiguado.


El amortiguamiento crítico posee una propiedad que lo hace interesante desde el punto de vista técnico: es el caso en que se retorna más rápidamente a la posición de equilibrio. Si la fricción es menor, el oscilador va y viene y tarda más en pararse. Si es mayor, la fuerte fricción ralentiza el movimiento y tarda también más en pararse. El tiempo típico de parada en el caso subamortiguado es

τ
=
1
β
{\displaystyle \tau ={\frac {1}{\beta }}}
y en el sobreamortiguado

τ
=
1
|
λ
1
|
=
1
β
−
β
2
−
ω
0
2
{\displaystyle \tau ={\frac {1}{|\lambda _{1}|}}={\frac {1}{\beta -{\sqrt {\beta ^{2}-\omega _{0}^{2}}}}}}
Representando este tiempo como función de 
β
{\displaystyle \beta } para una frecuencia propia fijada de 1 s−1 vemos como efectivamente es mínimo cuando se da el amortiguamiento crítico.


Por ello, los amortiguadores de los automóviles y demás maquinaria procuran ajustarse al valor crítico, ya que de esta forma se consigue el objetivo de detener las vibraciones en el menor tiempo posible.

Comparación de los tres casos
Supongamos, como ejemplo, una frecuencia propia de 1\,rad/s y que las condiciones iniciales son que liberamos la partícula desde una cierta distancia de 10 cm, es x_0 decir 
x
0
=
0.1
m
{\displaystyle x_{0}=0.1\,\mathrm {m} } y 
v
0
=
0
m
/
s
{\displaystyle v_{0}=0\,\mathrm {m} /\mathrm {s} }. Comparando los caso de 
β
=
0.5
s
−
1
{\displaystyle \beta =0.5\mathrm {s} ^{-1}}, 
β
=
1.0
s
−
1
{\displaystyle \beta =1.0\mathrm {s} ^{-1}}, y 
β
=
1.5
s
−
1
{\displaystyle \beta =1.5\mathrm {s} ^{-1}} obtenemos las curvas siguientes:


Vemos como la crítica y la sobreamortiguada decaen siendo la crítica más rápida en hacerlo, mientras que la subamortiguada presenta oscilaciones rápidamente decrecientes.

Si consideramos el caso de una masa que parte del equilibrio, pero con una cierta velocidad de 1m/s (es decir 
x
0
=
0
m
{\displaystyle x_{0}=0\,\mathrm {m} }, 
v
0
=
1
m
/
s
{\displaystyle v_{0}=1\,\mathrm {m} /\mathrm {s} } obtenemos para los mismos valores


En este caso las curvas no se limitan a decaer, pues hay un alejamiento inicial. La partícula termina volviendo a la posición de equilibrio, siendo el camino más rápido el del amortiguamiento crítico. Vemos también que aunque en todos los casos parte con la misma velocidad el máximo alejamiento es menor cuanto mayor sea el rozamiento.

Energía en un oscilador amortiguado
Una de las consecuencias del amortiguamiento es la disipación de energía mecánica. De acuerdo con el teorema de las fuerzas vivas

d
K
d
t
=
P
=
P
c
+
P
n
c
{\displaystyle {\frac {\mathrm {d} K}{\mathrm {d} t}}=P=P_{\mathrm {c} }+P_{\mathrm {nc} }}
siendo 
K
{\displaystyle K} la energía cinética

K
=
1
2
m
v
2
{\displaystyle K={\frac {1}{2}}mv^{2}}
y 
P
c
{\displaystyle P_{c}} la potencia de las fuerzas conservativas (la elástica, en este caso) y 
P
n
c
{\displaystyle P_{nc}} la de las no conservativas (que sería la de rozamiento). La potencia de las fuerzas conservativas verifica

P
c
=
−
d
U
d
t
{\displaystyle P_{\mathrm {c} }=-{\frac {\mathrm {d} U}{\mathrm {d} t}}}
con 
U
{\displaystyle U} la energía potencial elástica

U
=
1
2
k
x
2
{\displaystyle U={\frac {1}{2}}kx^{2}}
Pasando la energía potencial al primer miembro obtenemos la energía mecánica

d
E
d
t
=
d
 
d
t
(
K
+
U
)
=
P
n
c
{\displaystyle {\frac {\mathrm {d} E}{\mathrm {d} t}}={\frac {\mathrm {d} \ }{\mathrm {d} t}}(K+U)=P_{\mathrm {nc} }}
La potencia de las fuerzas no conservativas la calculamos multiplicando la fuerza por la velocidad

P
n
c
=
F
r
v
=
−
γ
v
2
{\displaystyle P_{\mathrm {nc} }=F_{r}v=-\gamma v^{2}\,}
de forma que nos queda la relación

d
 
d
t
(
1
2
m
v
2
+
1
2
k
x
2
)
=
−
γ
v
2
{\displaystyle {\frac {\mathrm {d} \ }{\mathrm {d} t}}\left({\frac {1}{2}}mv^{2}+{\frac {1}{2}}kx^{2}\right)=-\gamma v^{2}}
Puesto que el segundo miembro es siempre negativo, esta ecuación nos dice que la energía mecánica se va disipando progresivamente, aunque no a ritmo uniforme: el consumo es mayor cuando lo es la rapidez del movimiento.

En el caso del amortiguamiento muy débil, si representamos la energía mecánica en una curva de potencial vemos como la energía mecánica va descendiendo a medida que la partícula va y viene


Si realizamos gráficas equivalentes para los ejemplos anteriores vemos un decaimiento muy rápido de la energía. Puesto que en el caso crítico y el sobreamortiguado no llega a realizar una oscilación completa, lo que vemos es que la curva de energía "cae en picado", siendo la disipación tanto más rápida cuanto mayor es la constante de amortiguamiento.