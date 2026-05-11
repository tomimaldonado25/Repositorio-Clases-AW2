import express from 'express'

const app = express()
const PUERTO = 3000



const verificarCodigo = async (req, res, next) => {

    try {
     
        const respuesta = await fetch('http://localhost:4321/usuario')
        const datos = await respuesta.json()

       
        const codigoIngresado = Number(req.params.codigo)

        if (codigoIngresado === datos.codigo) {
           
           return next()
        } else {
            
            res.status(400).json({ mensaje: 'El código es incorrecto' })
        }

    } catch (error) {
        console.error('Error al conectar con la API:', error.message)
        res.status(500).json({ mensaje: 'Error interno del servidor' })
    }

}



app.get('/:codigo', verificarCodigo, (req, res) => {
    res.status(200).json({ mensaje: 'El código es correcto' })
})


app.listen(PUERTO, () => {
    console.log(`Servidor proyecto corriendo en http://localhost:${PUERTO}`)

})
