'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Type.hasMany(models.Transaction, { foreignKey: 'id_type' });
    }
  };
  Type.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Nama Type tidak boleh kosong"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Type',
  });
  return Type;
};