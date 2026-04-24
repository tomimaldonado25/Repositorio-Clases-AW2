
// PUNTO DE ENTRADA DEL PROGRAMA

// Importamos las funciones desde los módulos
import { dataExtractor } from './modules/dataExtractor.mjs';
import { readerAndWriter } from './modules/readerAndWriter.mjs';

try {
    // PASO 1: Buscar datos en la API y formatearlos
    const usuariosFormateados = await dataExtractor();

    // PASO 2: Guardar en archivo local y leerlos
    const usuariosLocales = await readerAndWriter(usuariosFormateados);

    // PASO 3: Imprimir por consola
    console.log(usuariosLocales);

} catch (error) {
    console.log(`Error general: ${error.message}`);
}
