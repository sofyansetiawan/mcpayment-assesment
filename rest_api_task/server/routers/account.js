const router = require('express').Router()
const AccountController = require('../controllers/accountController.js')

router.get('/', AccountController.getAllAccount)
router.post('/add', AccountController.postAdd)
router.put('/edit/:id', AccountController.postEdit)
router.delete('/delete/:id', AccountController.getDeleteAccount)

module.exports = router