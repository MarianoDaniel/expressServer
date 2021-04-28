import { crearCliente } from '../src/ClienteRest.js'

async function main() {
  try {

    const cliente = crearCliente('http://localhost:8080/alumnos')

    /* await cliente.post({ nombre: 'mariano', edad: 15 })
    await cliente.post({ nombre: 'florencia', edad: 15 })
    */
    await cliente.post({ nombre: 'Mariano', edad: 17, dni: 111 })
    await cliente.post({ nombre: 'Daniel', edad: 10, dni: 222 })
    await cliente.post({ nombre: 'Eduardo', edad: 22, dni: 333 })
    await cliente.post({ nombre: 'Monica', edad: 52, dni: 444 })
    await cliente.post({ nombre: 'Estefania', edad: 19, dni: 555 })
    await cliente.post({ nombre: 'Carla', edad: 33, dni: 666 })
    await cliente.post({ nombre: 'Silvia', edad: 25, dni: 777 })

    //const datos = await cliente.getAll()


    //await cliente.getById(0)

    //await cliente.getByQuery({ nombre: 'mariano' })
    
    //await cliente.getByQuery({min:32, max:55 })


    
    //await cliente.getByQuery({ dni: 111 })
    
    //await cliente.getByQuery({ dni: 65 })
    
   
       const respuesta = await cliente.put({ nombre: 'Edu', edad: 26, dni: 8888 }, 2)
      console.log("Respuesta",respuesta)
     
    /*
       await cliente.deleteById(4)
       const datos5 = await cliente.getAll()
       console.log(datos5)
   
       await cliente.deleteById(100) */
  } catch (error) {
    console.log(error.detalles)
  }
}

main()