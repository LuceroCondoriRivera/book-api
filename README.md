📚 API de Libros

Nuestra  API permite gestionar una biblioteca mediante un servidor TCP desarrollado en Node.js. Se administran y gestionan libros, autores y editoriales,
además de buscar por criterios y  añadir nuevos libros. Desarrollamos un cliente TCP para interactuar con el servidor.
Creamos una carpeta,,inicializamos un proyecto  Node.js, configuramos nuestro package.json, instalamos dependencias UUID y 
utilizamos el patron MCV creando tres carpetas ,luego tres archivos.Configuramos el servidor para trabajar en el puerto 8080 y creamos un cliente para
interactuar con el servidor.

🚀 Características

📖 Gestión de libros (añadir, buscar, listar)

✍️ Gestión de autores

🏢 Gestión de editoriales

🔍 Búsqueda de libros

🖥️ Cliente TCP para interactuar con el servidor

   Configurar un servidor 8080
   
   Utilizamos el patron MCV 

   Utilizamos dependencias UUID 
   
   
📦 Instalación

Clona el repositorio:

 git clone https://github.com/LuceroCondoriRivera/book-api.git

Para instalar dependencias :  

 cd api-libros
 npm init 
 npm  install uuid  
 
 ▶️ Ejecución del Servidor
Ejecuta el servidor

📡Utilizamos los comandos desde el servidor TCP

get books  - add books
get authors  - add authors
get publisher  -  add publisher ,etc .

 🛠️ Tecnologías
 
Node.js
TCP Sockets
Módulo net para conexiones TCP

📌 Autor: 

https://github.com/ariadna-web 
https://github.com/LuceroCondoriRivera/backend.git
https://github.com/arenquena 
https://github.com/vaninaandrea/ada_proyectoejercicios.git

📜 Licencia: MIT
