import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-2xl w-full space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Aplicación de Prueba</CardTitle>
            <CardDescription>
              Aplicación básica con Vite + React + shadcn/ui para prueba de despliegue en Firebase
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-center gap-4">
              <Button 
                onClick={() => setCount((count) => count - 1)}
                variant="outline"
                size="lg"
              >
                -
              </Button>
              <div className="text-4xl font-bold min-w-[100px] text-center">
                {count}
              </div>
              <Button 
                onClick={() => setCount((count) => count + 1)}
                variant="default"
                size="lg"
              >
                +
              </Button>
            </div>
            <div className="flex justify-center gap-2">
              <Button 
                onClick={() => setCount(0)}
                variant="secondary"
              >
                Resetear
              </Button>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground text-center">
                Esta es una aplicación de prueba configurada para desplegarse en Firebase Hosting
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App
