const router = require('express').Router()

const pool = require('../db/postgreSQL')

// Custom functions and methods
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

// Route for Employees
router.get('/dt_employees', (req, res) => {
  pool.query('select * from employees', (err, results) => {
    if (err) {
      console.log(err)
    }
    getFormattedDate(results.rows)
    res.json(results.rows)
  })
})

router.post('/dt_employees', (req, res) => {
  const { name, surname, birthDate, hiredDate, job, salary } = req.body
  pool.query(
    `insert into employees(name, surname, birth_date, hired_date, job, salary) 
    values($1,$2,$3,$4,$5,$6)`,
    [name, surname, birthDate, hiredDate, job, salary],
    (err, messages) => {
      if (err) {
        console.log(err)
      }
      res.redirect('/')
    }
  )
})

// Route for Users
router.get('/dt_users', (req, res) => {
  pool.query('select * from users', (err, results) => {
    if (err) {
      console.log(err)
    }
    getFormattedDate(results.rows)
    res.json(results.rows)
  })
})

module.exports = router
