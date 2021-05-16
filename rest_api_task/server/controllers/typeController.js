const { Type } = require('../models/index')

class TypeController {

    static getAllType(req, res, next) {
        Type.findAll({
                order: [
                    ['id', 'ASC']
                ]
            })
            .then(data => res.status(200).json({
                types: data
            }))
            .catch(err => next(err))
    }

    static postAdd(req, res, next) {
        const {
            name
        } = req.body
        const typeObj = {
            name
        }

        Type.create(typeObj)
            .then(data => res.status(201).json({
                types: data
            }))
            .catch(err => next(err))
    }

    static postEdit(req, res, next) {
        const inputId = +req.params.id
        const {
            name
        } = req.body
        const typeObj = {
            name
        }

        Type.update(typeObj, {
                where: {
                    id: inputId
                },
                individualHooks: true
            })
            .then(data => res.status(200).json({
                types: data
            }))
            .catch(err => next(err))
    }

    static getDeleteType(req, res) {
        const inputId = +req.params.id
        Type.destroy({
                where: {
                    id: inputId
                },
                individualHooks: true
            })
            .then(type => res.status(200).json({
                msg: "deleted"
            }))
            .catch(err => res.render(err))
    }

}

module.exports = TypeController