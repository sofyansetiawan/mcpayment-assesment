const router = require('express').Router()
const TransactionController = require('../controllers/transactionController')

router.get('/', TransactionController.getAllTransaction)
router.post('/add', TransactionController.postAdd)
router.put('/edit/:id', TransactionController.postEdit)
router.delete('/delete/:id', TransactionController.getDeleteTransaction)

module.exports = router