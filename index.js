const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const frontend = require('./router/front')
const backend = require('./router/back')

const PORT = 3004

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('views', 'views')
app.set('view engine', 'ejs')

//middleware
app.use(frontend)
app.use(backend)
app.use((req, res) => {
  res.render('404.ejs')
})

app.listen(3004, () => {
  console.log('port: ' + PORT)
})
