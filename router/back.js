const router = require('express').Router()
const id = require('shortid')

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
  pool.query(
    `SELECT
        employees.id, name, surname, birth_date, job_name, employees.salary, work_time
    FROM
        employees
    LEFT JOIN
        jobs
    ON
        employees.job_id=jobs.id`,
    (err, results) => {
      if (err) {
        console.log(err)
      }
      getFormattedDate(results.rows)
      res.json(results.rows)
    }
  )
})
router.post('/dt_employees', (req, res) => {
  const { name, surname, birthDate, job_id } = req.body
  pool
    .query(`select salary from jobs where id='${job_id}'`)
    .then((results) => {
      pool.query(
        `insert into employees(id, name, surname, birth_date, job_id, salary) 
    values($1, $2, $3, $4, $5, $6)`,
        [id(), name, surname, birthDate, job_id, results.rows[0].salary],
        (err, messages) => {
          if (err) {
            console.log(err)
          }
          res.redirect('/main')
        }
      )
    })
    .catch((err) => {
      console.log(err)
    })
})
router.post('/remove-employee', (req, res) => {
  const id = req.body.id
  pool
    .query(`delete from employees where id='${id}'`)
    .then((message) => {
      res.redirect('/main')
    })
    .catch((err) => {
      console.log(err)
    })
})

// Route for Jobs
router.post('/create-job', (req, res) => {
  const { name, description, start_time, end_time, salary } = req.body
  const work_time = start_time.toString() + '-' + end_time.toString()
  pool.query(
    'insert into jobs(id, job_name, description, work_time, salary) values($1, $2, $3, $4, $5)',
    [id(), name, description, work_time, salary],
    (err, message) => {
      if (err) {
        console.log(err)
      }
      res.redirect('/is-gornus')
    }
  )
})
router.get('/remove-job', (req, res) => {
  const id = req.query.id
  pool.query('delete from jobs where id=$1', [id], (err, message) => {
    if (err) {
      console.log(err)
    }
    res.redirect('/is-gornus')
  })
})

// Route for Users
router.get('/dt_users', (req, res) => {
  pool.query('select * from users', (err, results) => {
    if (err) {
      console.log(err)
    }
    res.json(results.rows)
  })
})

// Route for Managing Products
router.post('/create-product', (req, res) => {
  const { name, description, price, stock, type, discount } = req.body
  pool
    .query(
      'insert into products(id, name, description, price, stock, type, discount) values($1,$2,$3,$4,$5,$6,$7)',
      [id(), name, description, price, stock, type, discount || null]
    )
    .then((message) => {
      res.redirect('/prices')
    })
    .catch((err) => {
      console.log(err)
    })
})
router.get('/remove-product', (req, res) => {
  const id = req.query.id
  pool
    .query('delete from products where id=$1', [id])
    .then((message) => {
      res.redirect('/prices')
    })
    .catch((err) => {
      console.log(err)
    })
})
router.get('/update-product', (req, res) => {
  const id = req.query.id
  pool
    .query('select * from products where id=$1', [id])
    .then((results) => {
      res.render('prices', { products: [], product: results.rows[0] })
    })
    .catch((err) => {
      console.log(err)
    })
})
router.post('/update-product', (req, res) => {
  const { name, description, price, stock, type, discount } = req.body
  const id = req.query.id
  pool
    .query(
      'update products set name=$1, description=$2, price=$3, stock=$4, type=$5, discount=$6 where id=$7',
      [name, description, price, stock, type, discount || null, id]
    )
    .then((message) => {
      res.redirect('/prices')
    })
    .catch((err) => {
      console.log(err)
    })
})
module.exports = router
