#Repositorio Clases AW2

Repositorio de actividades de la materia Aplicaciones Web 2.

#Actividad 2 — Petición a API externa con Node.js

Aplicación en Node.js que hace una petición a una API REST externa, formatea los datos y los guarda en un archivo JSON local. Luego los lee e imprime por consola.

 ¿Qué hace?
- Hace un fetch al endpoint https://api.escuelajs.co/api/v1/users
- Formatea los datos dejando solo id, email y nombre usando .map()
- Guarda los datos en un archivo usuarios.json local
- Lee el archivo guardado e imprime los datos por consola



node index.mjs



Actividad 3 — Servidor HTTP con Node.js

Aplicación que ejecuta un servidor web HTTP que actúa como intermediario entre una API REST externa y el cliente navegador.

¿Qué hace?
- Arranca un servidor en http://localhost:3000
- Ruta GET /usuarios → trae usuarios de la API, los guarda en JSON y los envía al cliente con código 200
- Ruta GET /usuarios/filtrados → lee el JSON guardado y envía solo los usuarios con ID menor a 10
- Cualquier otra ruta o verbo → responde con código 404 y mensaje Recurso no encontrado



node index.mjs

