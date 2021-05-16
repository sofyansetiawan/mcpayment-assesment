const { Transaction } = require('../models/index')

class TransactionController {

    static getAllTransaction(req, res, next) {
        Transaction.findAll({
                order: [
                    ['transaction_date', 'DESC']
                ]
            })
            .then(data => res.status(200).json({
                transactions: data
            }))
            .catch(err => next(err))
    }

    static postAdd(req, res, next) {
        const {
            transaction_date,
            account,
            type,
            amount,
            note
        } = req.body
        const transactionObj = {
            transaction_date,
            id_account: account,
            id_type: type,
            amount,
            note
        }

        Transaction.create(transactionObj)
            .then(data => res.status(201).json({
                transactions: data
            }))
            .catch(err => next(err))
    }

    static postEdit(req, res, next) {
        const inputId = +req.params.id
        const {
            transaction_date,
            account,
            type,
            amount,
            note
        } = req.body
        const transactionObj = {
            transaction_date,
            id_account: account,
            id_type: type,
            amount,
            note
        }

        Transaction.update(transactionObj, {
                where: {
                    id: inputId
                },
                individualHooks: true
            })
            .then(data => res.status(200).json({
                transactions: data
            }))
            .catch(err => next(err))
    }

    static getDeleteTransaction(req, res) {
        const inputId = +req.params.id
        Transaction.destroy({
                where: {
                    id: inputId
                },
                individualHooks: true
            })
            .then(transaction => res.status(200).json({
                msg: "deleted"
            }))
            .catch(err => res.render(err))
    }

}

module.exports = TransactionController