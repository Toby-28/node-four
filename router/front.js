const router = require('express').Router()

router.get('/isgarler', (req, res) => {
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
router.get('/login', (req, res) => {
  res.render('login')
})
router.get('/forgot-password', (req, res) => {
  res.render('forgot-password')
})
router.get('/register', (req, res) => {
  res.render('register')
})

module.exports = router
