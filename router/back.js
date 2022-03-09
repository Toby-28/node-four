const router = require('express').Router()

const connection = require('../db/postgreSQL')

function getFormattedDate(rows) {
  rows.forEach((row) => {
    const date = row['birth_date']
    const option = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    row['birth_date'] = date.toLocaleDateString('en-EN', option)
  })
}

router.get('/dt_employees', (req, res) => {
  connection.query('select * from employees', (err, results) => {
    if (err) {
      console.log(err)
    }
    getFormattedDate(results.rows)
    res.json(results)
  })
})

router.get('/dt_users', (req, res) => {
  connection.query('select * from users', (err, results) => {
    if (err) {
      console.log(err)
    }
    getFormattedDate(results.rows)
    res.json(results)
  })
})

router.post('/dt_employees', (req, res) => {
  const { name, surname, birthDate, hiredDate, jobId, salary } = req.body
  connection.query(
    `insert into employees(name, surname, birthDate, hiredDate, jobId, salary) 
    values()`,
    [name, surname, birthDate, hiredDate, jobId, salary],
    (err, messages) => {
      if (err) {
        console.log(err)
      }
      console.log(messages)
      res.end()
    }
  )
})

module.exports = router
