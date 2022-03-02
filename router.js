const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('isgarler')
})
router.get('/ulanyjylar', (req, res) => {
  res.render('ulanyjylar')
})
router.get('/habarlasmak', (req, res) => {
  res.render('habarlasmak')
})
router.get('/tranzaksiya', (req, res) => {
  res.render('tranzaksiya')
})

module.exports = router
