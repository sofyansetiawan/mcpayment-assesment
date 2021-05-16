'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.Account, {
        foreignKey: "id_account",
      })
      Transaction.belongsTo(models.Type, {
        foreignKey: "id_type",
      })
    }
  };
  Transaction.init({
    transaction_date: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: {
          args: true,
          msg: "Tanggal tidak boleh kosong"
        }
      }
    },
    id_account: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: "Account tidak boleh kosong"
        }
      }
    },
    id_type: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: "Type tidak boleh kosong"
        }
      }
    },
    amount: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: "Amount tidak boleh kosong"
        }
      }
    },
    note: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};