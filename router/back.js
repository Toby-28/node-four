const router = require('express').Router()

const connection = require('../db/mysql')

function getFormattedDate(results) {
  results.forEach((result) => {
    const date = result['birth_date']
    const option = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    result['birth_date'] = date.toLocaleDateString('en-EN', option)
  })
}

router.get('/dt_employees', (req, res) => {
  connection.query('select * from employees', (err, results) => {
    if (err) {
      console.log(err)
    }
    getFormattedDate(results)
    res.json(results)
  })
})

router.get('/dt_users', (req, res) => {
  connection.query('select * from users', (err, results) => {
    if (err) {
      console.log(err)
    }
    getFormattedDate(results)
    res.json(results)
  })
})

module.exports = router
