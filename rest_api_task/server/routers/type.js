const router = require('express').Router()
const TypeController = require('../controllers/typeController')

router.get('/', TypeController.getAllType)
router.post('/add', TypeController.postAdd)
router.put('/edit/:id', TypeController.postEdit)
router.delete('/delete/:id', TypeController.getDeleteType)

module.exports = router