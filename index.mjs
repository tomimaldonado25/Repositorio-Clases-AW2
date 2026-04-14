
import fsp from 'node:fs/promises'
import path from 'node:path'


try {
    const respuesta= await fetch('https://api.escuelajs.co/api/v1/users')
     const usuarios= await respuesta.json()

     const usuariosModificados= usuarios.map((usuario)=>{
        const usuariosModificado ={
            id : usuario.id ,
            email:usuario.email,
            nombre:usuario.name,
        } 

        return usuariosModificado

         
     })

     const ruta = path.resolve('usuarios.json')
     const datosJeson = JSON.stringify(usuariosModificados,null,4)
     await fsp.writeFile(ruta,datosJeson)
     
    const usurarioslocales = await fsp.readFile(ruta,'utf8')
     console .log(usurarioslocales)

     
    }catch(error){
   console.log(error)

}
