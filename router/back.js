const router = require('express').Router()

const connection = require('../db/mysql')

router.get('/dt_employees', (req, res) => {
  connection.query('select * from employees', (err, results) => {
    if (err) {
      console.log(err)
    }
    res.json(results)
  })
})

module.exports = router
