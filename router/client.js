const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/products', (req, res) => {
  res.render('harytlar')
})

router.get('/portfolio-details', (req, res) => {
  res.render('portfolio-details')
})

module.exports = router
