Para inicializar el proyecto siga los siguientes pasos:

1. Instalar dependencias: "npm install".
2. Levantar los contenedores docker de la base de datos: "npm run start-services".
3. Ejecutar las migraciones de la base de datos: "npm run migrations".
4. Poblar la base de datos ejecutando los seeders: "npm run seeds".
5. Levantar la aplicacion: "npm run start".

Para deshacer los seeders: "npm run undo-seeds".
Para deshacer las migraciones: "npm run undo-migrations".
Acceder a la interfaz de pgAdmin en la direccion http://localhost:8080