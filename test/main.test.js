import { crearCliente } from '../src/ClienteRest.js'

async function main() {
  try {

    const cliente = crearCliente('http://localhost:8080/alumnos')

    /* await cliente.post({ nombre: 'mariano', edad: 15 })
    await cliente.post({ nombre: 'florencia', edad: 15 })
    */
    await cliente.post({ nombre: 'Goku', edad: 17 })
    await cliente.post({ nombre: 'molusco', edad: 10 })
    await cliente.post({ nombre: 'polMakCarne', edad: 22 })
    await cliente.post({ nombre: 'CindiNero', edad: 52 })
    await cliente.post({ nombre: 'Coperniko', edad: 19 })
    await cliente.post({ nombre: 'Yagernat', edad: 33 })
    await cliente.post({ nombre: 'Mescal', edad: 25 })

    const datos = await cliente.getAll()
    //console.log("getAll", datos)

    //await cliente.getById(0)

    // const datos2 = await cliente.getByQuery({ nombre: 'mariano' })
    const datos3 = await cliente.getByQuery({min:24, max:50 })
    //console.log(datos3)
    /*
       const datos3 = await cliente.getByQuery({ edad: 15 })
       console.log(datos3)
   
       await cliente.put({ nombre: 'floricienta', edad: 40 }, 2)
       const datos4 = await cliente.getAll()
       console.log(datos4)
   
       await cliente.deleteById(4)
       const datos5 = await cliente.getAll()
       console.log(datos5)
   
       await cliente.deleteById(100) */
  } catch (error) {
    console.log(error.detalles)
  }
}

main()