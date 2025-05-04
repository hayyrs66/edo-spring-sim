'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Settings } from "lucide-react";

export default function Home() {
  const [open, setOpen] = useState(false);

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
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Simulación</CardTitle>
          </CardHeader>
          <CardContent className="h-[400px] flex items-center justify-center border-t">
            <p className="text-muted-foreground">Contenido de la simulación se mostrará aquí</p>
          </CardContent>
        </Card>

        {/* Graph Card */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Gráfica Matemática</CardTitle>
          </CardHeader>
          <CardContent className="h-[400px] flex items-center justify-center border-t">
            <p className="text-muted-foreground">La gráfica se visualizará aquí</p>
          </CardContent>
        </Card>
      </main>

      {/* Settings Drawer */}
      <div className="fixed bottom-6 right-6">
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button size="icon" className="rounded-full shadow-lg">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Configuración</span>
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-[80dvh] max-h-[50dvh] w-full max-w-none">
            <DrawerHeader>
              <DrawerTitle>Configuración</DrawerTitle>
            </DrawerHeader>
            <div className="p-6">
              <p className="text-muted-foreground">Aquí irán los controles de configuración</p>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
