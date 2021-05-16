const router = require('express').Router()

const transactionRouter = require('./transaction')
const accountRouter = require('./account')
const typeRouter = require('./type')

router.get('/', (req, res) => res.status(200).json({ msg: 'Welcome to Transaction Server' }))
router.use('/transactions', transactionRouter)
router.use('/accounts', accountRouter)
router.use('/types', typeRouter)

module.exports = router