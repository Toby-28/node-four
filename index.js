const express = require('express')
const app = express()

const frontend = require('./router/front')
const backend = require('./router/back')

const PORT = 3004

app.use(express.static('public'))
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
