// modules/readerAndWriter.mjs
// MÓDULO DE LECTURA Y ESCRITURA DE ARCHIVOS

import fsp from 'node:fs/promises';
import path from 'node:path';

async function readerAndWriter(usuariosFormateados) {
    try {
        // Construimos la ruta absoluta al archivo usuarios.json
        const ruta = path.resolve('usuarios.json');

        // Convertimos el array a texto JSON con formato prolijo (4 espacios)
        const datosJSON = JSON.stringify(usuariosFormateados, null, 4);

        // Escribimos el archivo (lo crea si no existe)
        await fsp.writeFile(ruta, datosJSON);

        // Leemos el archivo que acabamos de guardar
        const usuariosLocales = await fsp.readFile(ruta, 'utf-8');

        return usuariosLocales;

    } catch (error) {
        console.log(`Error al leer/escribir archivo: ${error.message}`);
    }
}

// Exportamos la función
export { readerAndWriter };