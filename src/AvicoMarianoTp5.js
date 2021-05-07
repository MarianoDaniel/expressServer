import express from 'express'

const app = express()

app.use(express.json())

const alumnos = []

let id = 0

app.get('/alumnos', (req, res) => {
  let peticion = req.query
  console.log("peticion", peticion)

  if (peticion.hasOwnProperty('min')) {
    let alumnosRango = alumnos.filter(a => a.edad >= peticion.min && a.edad <= peticion.max)
    console.log("Alumnos en rango", alumnosRango)
  } else if (peticion.hasOwnProperty('dni')) {
    let alumnoPorDni = alumnos.find(a => a.dni == peticion.dni);
    alumnoPorDni ? console.log(alumnoPorDni) : console.log("No hay alumno con ese dni")
  } else {
    console.log("get all", alumnos)
  }
})

app.get('/alumnos/:id', (req, res) => {

  const id = Number(req.params.id)
  if (isNaN(id)) {
    return res.status(400).json({ msg: 'id debe ser numerico' })
  }
  const buscado = alumnos.find(a => a.id === Number(req.params.id))
  if (!buscado) {
    return res.status(404).json({ msg: 'no lo encontre' })
  }

  res.json(buscado)
  console.log("Buscado", buscado)

})

app.post('/alumnos', (req, res) => {

  if (!req.body.hasOwnProperty('nombre')) {
    return res.status(400).json({ msg: 'falta el campo nombre' })
  }

  req.body.id = id++
  alumnos.push(req.body)
  res.status(201).json(req.body)
})

app.put('/alumnos/:id', (req, res) => {
  res.send({ params: req.params, data: req.body, alum: alumnos })
  //console.log("Put",alumnos)
})

app.delete('/alumnos', (req, res) => {
  //console.log(req.body)
  //res.json({ msg: req.body })
  console.log("Delete", alumnos)
})

const puerto = 8080
const server = app.listen(puerto, () => {
  console.log(`servidor inicializado en puerto ${server.address().port}`)
})


