const express = require('express')
const app = express()

const router = require('./router')

app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

//middleware
app.use(router)
app.use((req, res) => {
  res.render('404.ejs')
})

app.listen(30022, () => {
  console.log('port: 30022')
})
