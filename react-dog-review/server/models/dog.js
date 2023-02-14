'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dog.init({
    dog_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    dog_name:{ 
      type: DataTypes.STRING,
      allowNull: false
    },
    address:{ 
      type: DataTypes.STRING,
      allowNull: false
    },
    review:{
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Dog',
    tableName: 'Dogs',
    timeStamps: false
  });
  return Dog;
};