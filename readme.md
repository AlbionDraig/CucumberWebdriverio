# Instalación y Ejecución de Código con @wdio/cli

Este proyecto fue desarrollado utilizando las siguientes versiones de las herramientas:

- Node.js: v18.20.0
- npm: v10.5.2
- @wdio/cli: v8.36.1

## Instalación

0. Abre una terminal y navega hasta la ruta raíz del proyecto:

    ```
    cd /ruta/a/la/ruta/raiz/del/proyecto
    ```

1. **Node.js y npm**: Asegúrate de tener Node.js y npm instalados en tu sistema. Puedes descargarlos desde [aquí](https://nodejs.org/).

2. **Dependencias del Proyecto**: Instala las dependencias del proyecto ejecutando el siguiente comando en la raíz del proyecto:

   ```bash
   npm install
   ```

## Ejecución

Una vez que todas las dependencias estén instaladas, puedes ejecutar el código utilizando el siguiente comando:

```bash
npx wdio run ./wdio.conf.ts --spec ./features/NombreFeature.feature
```

Este comando ejecutará el código utilizando la configuración en `wdio.conf.ts` y ejecutará la especificación de prueba ubicada en `./features/NombreFeature.feature`.

# Nota del desarrolador:
Modificar en el archivo `features\register.feature` en el example para `la ultima fila` de `la columna email`, con un valor diferente que sea valido si el correo que esta ya existe.