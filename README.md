Para inicializar el proyecto siga los siguientes pasos:

1. Instalar dependencias: "npm i".
2. Levantar los contenedores docker de la base de datos: "npm run start-services".
3. Ejecutar migraciones y seeders: "npm run db-setup"
4. Ejecutar los tests: "npm run test".
5. Levantar la aplicacion en modo dev: "npm run start-dev".
6. Levantar la aplicacion sin nodemon: "npm run start"

Para deshacer los seeders: "npm run undo-seeds".
Para deshacer las migraciones: "npm run undo-migrations".
Acceder a la interfaz de pgAdmin en la direccion http://localhost:8080