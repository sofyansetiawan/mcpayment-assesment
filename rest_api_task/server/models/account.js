'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Account.hasMany(models.Transaction, { foreignKey: 'id_account' });
    }
  };
  Account.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Nama Account tidak boleh kosong"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};