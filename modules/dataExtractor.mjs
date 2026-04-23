// modules/dataExtractor.mjs
// MÓDULO DE OBTENCIÓN DE DATOS VÍA PETICIÓN

async function dataExtractor() {
    try {
        // Hacemos la petición a la API
        const respuesta = await fetch('https://api.escuelajs.co/api/v1/users');

        // Convertimos la respuesta a objeto JavaScript
        const usuarios = await respuesta.json();

        // Formateamos: nos quedamos solo con id, email y nombre
        const usuariosFormateados = usuarios.map((usuario) => {
            return {
                id: usuario.id,
                email: usuario.email,
                nombre: usuario.name,
            };
        });

        return usuariosFormateados;

    } catch (error) {
        console.log(`Error al obtener datos: ${error.message}`);
    }
}

// Exportamos la función para poder usarla desde otros archivos
export { dataExtractor };