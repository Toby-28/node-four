const router = require('express').Router()
const connection = require('../db/postgreSQL')

router.get('/', (req, res) => {
  connection.query('select * from jobs', (err, results) => {
    if (err) {
      console.log(err)
    }
    res.render('isgarler', { jobs: results.rows })
  })
})
router.get('/is-gornus', (req, res) => {
  connection.query('select * from jobs', (err, results) => {
    if (err) {
      console.log(err)
    }
    res.render('is-gornus', { jobs: results.rows })
  })
})
router.get('/ulanyjylar', (req, res) => {
  res.render('ulanyjylar')
})
router.get('/products', (req, res) => {
  connection
    .query('select * from products')
    .then((results) => {
      results.rows.forEach((row) => {
        if (row.discount) {
          row.colorCardBorder = 'danger'
        } else {
          row.colorCardBorder = 'secondary'
        }
      })
      res.render('products', {
        products: results.rows,
      })
    })
    .catch((err) => {
      console.log(err)
    })
})
router.get('/prices', (req, res) => {
  connection
    .query('select * from products')
    .then((results) => {
      res.render('prices', { products: results.rows, product: null })
    })
    .catch((err) => {
      console.log(err)
    })
})
router.get('/login', (req, res) => {
  res.render('login')
})

module.exports = router
