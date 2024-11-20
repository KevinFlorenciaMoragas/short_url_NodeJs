URL Shortener API

Este es un proyecto de una API RESTful creada con Node.js, Express, y TypeScript. Permite a los usuarios acortar URLs, almacenarlas en memoria usando un arreglo, y realizar operaciones CRUD (Crear, Leer, Actualizar y Borrar) sobre las URLs almacenadas.
Funcionalidades
Acortar URL: Permite a los usuarios enviar una URL y obtener un identificador único (shortCode) asociado.
Listar todas las URLs: Devuelve todas las URLs almacenadas.
Actualizar un shortCode: Permite modificar el código corto de una URL existente.
Borrar una URL: Permite eliminar una URL utilizando su shortCode.

Requisitos previos

Asegúrate de tener instalado lo siguiente:
    Node.js (versión 14 o superior)
    npm o yarn
Instalación
    Clona este repositorio en tu máquina local:
    git clone https://github.com/KevinFlorenciaMoragas/short_url_NodeJs.git
    cd url-shortener-t
Instala las dependencias:
   npm install
Compila el proyecto TypeScript:
   npm run build
Inicia el servidor:
   npm start

Endpoints de la API
1. Acortar URL

    POST /api/url
    Descripción: Recibe una URL y devuelve el objeto URL en forma de JSON.
    Body (JSON):

   {
     "url": "https://example.com"
   }

Respuesta (JSON):

    {
        "id": 1,
        "url": "http://google.com",
        "shortCode": "pcty81yyon",
        "timesAccessed": 1,
        "createdAt": "2024-11-20T10:27:50.757Z",
        "updatedAt": "2024-11-20T10:27:50.757Z"
    }

2. Listar todas las URLs

    GET /api/url
    Descripción: Devuelve todas las URLs almacenadas.
    Respuesta (JSON):

    [
    {
        "id": 1,
        "url": "http://google.com",
        "shortCode": "pcty81yyon",
        "timesAccessed": 1,
        "createdAt": "2024-11-20T10:27:50.757Z",
        "updatedAt": "2024-11-20T10:27:50.757Z"
    }
   ]

4. Actualizar shortCode

    PUT api/shortcode/:shortCode
    Descripción: Actualiza el código corto de una URL existente.
    Parámetro de ruta: shortCode (código corto existente)
    Body (JSON):

     {
      Ejemplo
       api/shortcode/pcty81yyon
      }

Respuesta (JSON):

    {
        "id": 1,
        "url": "http://google.com",
        "shortCode": "pcty81yyon",
        "timesAccessed": 1,
        "createdAt": "2024-11-20T10:27:50.757Z",
        "updatedAt": "2024-11-20T10:27:50.757Z"
    }

4. Borrar una URL

    DELETE api/shortcode/:shortCode
    Descripción: Elimina una URL utilizando su código corto.
    Parámetro de ruta: shortCode (código corto existente)
    Respuesta (JSON):

    {
      "message": "URL eliminada exitosamente"
    }

Estructura del Proyecto

├── src
│   ├── index.ts        # Punto de entrada del servidor
│   ├── routes.ts       # Definición de las rutas de la API
│   ├── controllers     # Lógica de negocio de cada endpoint
│   ├── models          # Tipos e interfaces para las URLs
│   └── utils           # Funciones auxiliares (e.g., generador de códigos cortos)
├── package.json        # Dependencias y scripts
├── tsconfig.json       # Configuración de TypeScript
└── README.md           # Este archivo

Scripts disponibles

    Iniciar el servidor en desarrollo:

npm run dev

Compilar TypeScript a JavaScript:

npm run build

Iniciar el servidor compilado:

    npm start

Dependencias principales

    Express: Framework para manejar rutas y middleware.
    TypeScript: Superset de JavaScript para tipado estático.
    nodemon: Reinicio automático del servidor en desarrollo.

Mejoras implementadas

    Añadir validación de URLs para asegurar que sean válidas antes de acortarlas.
    Implementar métricas para rastrear cuántas veces se accede a cada URL.

Contribuciones

¡Las contribuciones son bienvenidas! Por favor, abre un issue o un pull request en el repositorio si tienes sugerencias o mejoras.
