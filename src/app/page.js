'use client'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerFooter } from "@/components/ui/drawer";
import { Form, FormItem, FormLabel, FormDescription } from "@/components/ui/form";
import { NumberField } from "@/components/ui/number-field";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Settings, Play, Pause, RefreshCw } from "lucide-react";

export default function Home() {
  const [open, setOpen] = useState(false);
  
  // Setup form with React Hook Form
  const form = useForm({
    defaultValues: {
      // Parámetros físicos
      mass: 10, // kg
      dampingConstant: 0.4, // b
      springConstant: 0.16, // k N/m
      
      // Parámetros de la entrada escalón
      stepTime: 1,
      initialValue: 0.025,
      finalValue: 0,
      stopTime: 300,
      
      // Tipo de sistema
      systemType: "damped" // damped, undamped
    }
  });
  
  // Parámetros del sistema masa-resorte como estado para componentes que no usan el form
  const [params, setParams] = useState({
    // Parámetros físicos
    mass: 10, // kg
    dampingConstant: 0.4, // b
    springConstant: 0.16, // k N/m
    
    // Parámetros de la entrada escalón
    stepTime: 1,
    initialValue: 0.025,
    finalValue: 0,
    stopTime: 300,
    
    // Tipo de sistema
    systemType: "damped" // damped, undamped
  });

  // Función para actualizar un parámetro específico
  const updateParam = (key, value) => {
    setParams(prev => ({ ...prev, [key]: value }));
    // También actualizamos el valor en el formulario
    form.setValue(key, value);
  };

  // Handler para los inputs numéricos
  const handleNumberInputChange = (e, key) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      updateParam(key, value);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold">EDO-SPRING-SIM</h1>
        <p className="text-muted-foreground">Dashboard de simulación de ecuaciones diferenciales</p>
      </header>

      {/* Main Content */}
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Simulation Card */}
        <Card className="shadow-md rounded-sm">
          <CardHeader>
            <CardTitle>Simulación</CardTitle>
          </CardHeader>
          <CardContent className="h-[400px] flex items-center justify-center border-t">
            <p className="text-muted-foreground">Contenido de la simulación se mostrará aquí</p>
          </CardContent>
        </Card>

        {/* Graph Card */}
        <Card className="shadow-md rounded-sm">
          <CardHeader>
            <CardTitle>Gráfica Matemática</CardTitle>
          </CardHeader>
          <CardContent className="h-[400px] flex items-center justify-center border-t">
            <p className="text-muted-foreground">La gráfica se visualizará aquí</p>
          </CardContent>
        </Card>
      </main>

      {/* Simulation Controls */}
      <div className="mt-6 flex justify-center gap-4">
        <Button className="gap-2">
          <Play className="h-4 w-4" />
          Iniciar
        </Button>
        <Button variant="outline" className="gap-2">
          <Pause className="h-4 w-4" />
          Pausar
        </Button>
        <Button variant="secondary" className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Reiniciar
        </Button>
      </div>

      {/* Settings Drawer */}
      <div className="fixed bottom-6 right-6">
        <Drawer  open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button size="icon" className="rounded-full shadow-lg">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Configuración</span>
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-[80dvh] max-h-[80dvh] w-full max-w-none after:hidden overflow-y-auto ">
            <DrawerHeader>
              <DrawerTitle>Configuración del Sistema</DrawerTitle>
            </DrawerHeader>
            <Form {...form}>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Tipo de Sistema */}
                  <FormItem className="col-span-full">
                    <FormLabel>Tipo de Sistema</FormLabel>
                    <Select 
                      value={params.systemType} 
                      onValueChange={(value) => updateParam('systemType', value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecciona un tipo de sistema" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="damped">Sistema Amortiguado</SelectItem>
                        <SelectItem value="undamped">Sistema No Amortiguado</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Selecciona el tipo de sistema que deseas simular
                    </FormDescription>
                  </FormItem>

                  {/* Grupo de Parámetros Físicos */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Parámetros Físicos</h3>
                    
                    {/* Masa */}
                    <NumberField
                      id="mass"
                      label="Masa (m)"
                      value={params.mass}
                      onChange={(e) => handleNumberInputChange(e, 'mass')}
                      min={0.1}
                      description="Masa en kilogramos (kg)"
                    />
                    
                    {/* Constante del resorte */}
                    <NumberField
                      id="springConstant"
                      label="Constante del Resorte (k)"
                      value={params.springConstant}
                      onChange={(e) => handleNumberInputChange(e, 'springConstant')}
                      min={0.01}
                      description="Constante del resorte en N/m"
                    />
                    
                    {/* Constante de amortiguación (solo visible si es sistema amortiguado) */}
                    {params.systemType === 'damped' && (
                      <NumberField
                        id="dampingConstant"
                        label="Coeficiente de Amortiguación (b)"
                        value={params.dampingConstant}
                        onChange={(e) => handleNumberInputChange(e, 'dampingConstant')}
                        min={0}
                        description="Constante de amortiguación en N·s/m"
                      />
                    )}
                  </div>

                  {/* Grupo de Parámetros de Entrada */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Parámetros de Entrada Escalón</h3>
                    
                    {/* Step Time */}
                    <NumberField
                      id="stepTime"
                      label="Tiempo de Escalón"
                      value={params.stepTime}
                      onChange={(e) => handleNumberInputChange(e, 'stepTime')}
                      min={0}
                      description="Tiempo en el que ocurre el escalón"
                    />
                    
                    {/* Initial Value */}
                    <NumberField
                      id="initialValue"
                      label="Valor Inicial"
                      value={params.initialValue}
                      onChange={(e) => handleNumberInputChange(e, 'initialValue')}
                      description="Valor inicial de la entrada"
                    />
                    
                    {/* Final Value */}
                    <NumberField
                      id="finalValue"
                      label="Valor Final"
                      value={params.finalValue}
                      onChange={(e) => handleNumberInputChange(e, 'finalValue')}
                      description="Valor final después del escalón"
                    />
                    
                    {/* Stop Time */}
                    <NumberField
                      id="stopTime"
                      label="Tiempo de Parada"
                      value={params.stopTime}
                      onChange={(e) => handleNumberInputChange(e, 'stopTime')}
                      min={1}
                      description="Duración total de la simulación"
                    />
                  </div>
                </div>
              </div>
              <DrawerFooter>
                <div className="flex justify-between w-full">
                  <Button 
                    variant="outline" 
                    onClick={() => setOpen(false)}
                  >
                    Cerrar
                  </Button>
                  <Button 
                    onClick={() => {
                      // Aquí iría la lógica para aplicar los cambios
                      setOpen(false);
                    }}
                  >
                    Aplicar Cambios
                  </Button>
                </div>
              </DrawerFooter>
            </Form>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
