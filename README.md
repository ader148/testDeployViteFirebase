# Aplicación de Prueba - Vite + React + shadcn/ui

Aplicación básica creada con Vite, React, TypeScript y shadcn/ui para realizar pruebas de despliegue en Firebase Hosting y GitHub.

## 🚀 Tecnologías

- **Vite** - Build tool y dev server
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS
- **shadcn/ui** - Componentes de UI
- **Firebase Hosting** - Hosting estático

## 📦 Instalación

```bash
npm install
```

## 🛠️ Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 🏗️ Build para Producción

```bash
npm run build
```

Esto generará los archivos estáticos en la carpeta `dist/`

## 🔥 Despliegue en Firebase

### 1. Instalar Firebase CLI (si no lo tienes)

```bash
npm install -g firebase-tools
```

### 2. Iniciar sesión en Firebase

```bash
firebase login
```

### 3. Configurar el proyecto

Edita el archivo `.firebaserc` y reemplaza `"tu-proyecto-firebase"` con el ID de tu proyecto de Firebase.

### 4. Inicializar Firebase (si es necesario)

```bash
firebase init hosting
```

### 5. Desplegar

```bash
npm run build
firebase deploy --only hosting
```

## 📝 Configuración del Proyecto Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Activa Firebase Hosting
4. Copia el ID del proyecto y actualízalo en `.firebaserc`

## 🐙 GitHub

### Configuración inicial

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <tu-repositorio-github>
git push -u origin main
```

## 🤖 Despliegue Automático con GitHub Actions

El proyecto está configurado con GitHub Actions para desplegar automáticamente en Firebase Hosting cuando se hace push a la rama `main`.

### Configuración del Secret de Firebase

Para que GitHub Actions pueda desplegar en Firebase, necesitas configurar un secret:

1. **Obtener la cuenta de servicio de Firebase:**
   - Ve a [Firebase Console](https://console.firebase.google.com/)
   - Selecciona tu proyecto (`testdeployvite`)
   - Ve a **Configuración del proyecto** (ícono de engranaje) → **Cuentas de servicio**
   - Haz clic en **Generar nueva clave privada**
   - Se descargará un archivo JSON con las credenciales

2. **Agregar el secret en GitHub:**
   - Ve a tu repositorio en GitHub: `https://github.com/ader148/testDeployViteFirebase`
   - Ve a **Settings** → **Secrets and variables** → **Actions**
   - Haz clic en **New repository secret**
   - Nombre: `FIREBASE_SERVICE_ACCOUNT`
   - Valor: Copia y pega el contenido completo del archivo JSON descargado
   - Haz clic en **Add secret**

3. **¡Listo!** Ahora cada vez que hagas push a `main`, GitHub Actions:
   - Construirá automáticamente la aplicación
   - La desplegará en Firebase Hosting
   - Puedes ver el progreso en la pestaña **Actions** de tu repositorio

### Despliegue Manual (alternativa)

Si prefieres desplegar manualmente:

```bash
npm run build
firebase deploy --only hosting
```

## 📁 Estructura del Proyecto

```
├── public/          # Archivos estáticos
├── src/
│   ├── components/  # Componentes React
│   │   └── ui/      # Componentes shadcn/ui
│   ├── lib/         # Utilidades
│   ├── App.tsx      # Componente principal
│   └── main.tsx     # Punto de entrada
├── firebase.json    # Configuración de Firebase
└── .firebaserc      # ID del proyecto Firebase
```

## 🎨 Componentes shadcn/ui incluidos

- **Button** - Botones con múltiples variantes
- **Card** - Tarjetas para contenido

## 📄 Licencia

MIT
