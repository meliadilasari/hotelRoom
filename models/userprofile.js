'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserProfile.belongsTo(models.User, {foreignKey: "UserId"})
    }
  }
  UserProfile.init({
    fullName: DataTypes.STRING,
    gender: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    address: DataTypes.STRING,
    nik: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate: {
        notEmpty : {
          args : true,
          msg : 'nik is Required'
        },notNull: {
          
          msg: 'nik is Required'
        },
        isNumeric: {
          args : true,
          msg: 'Only numbers can be inputted in NIK.'
        }
      }
    },
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserProfile',
  });
  return UserProfile;
};