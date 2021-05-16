const { Account } = require('../models/index')

class AccountController {

    static getAllAccount(req, res, next) {
        Account.findAll({
                order: [
                    ['id', 'ASC']
                ]
            })
            .then(data => res.status(200).json({
                accounts: data
            }))
            .catch(err => next(err))
    }

    static postAdd(req, res, next) {
        const {
            name
        } = req.body
        const accountObj = {
            name
        }

        Account.create(accountObj)
            .then(data => res.status(201).json({
                accounts: data
            }))
            .catch(err => next(err))
    }

    static postEdit(req, res, next) {
        const inputId = +req.params.id
        const {
            name
        } = req.body
        const accountObj = {
            name
        }

        Account.update(accountObj, {
                where: {
                    id: inputId
                },
                individualHooks: true
            })
            .then(data => res.status(200).json({
                accounts: data
            }))
            .catch(err => next(err))
    }

    static getDeleteAccount(req, res) {
        const inputId = +req.params.id
        Account.destroy({
                where: {
                    id: inputId
                },
                individualHooks: true
            })
            .then(account => res.status(200).json({
                msg: "deleted"
            }))
            .catch(err => res.render(err))
    }

}

module.exports = AccountController