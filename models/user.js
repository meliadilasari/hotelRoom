'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.UserProfile, {foreignKey: "UserId"})
    }
  }
  User.init({
    username: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty : {
          args : true,
          msg : 'username is Required'
        },
        notNull: {
          msg: 'username is Required'
        }
      }
    },
    password: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty : {
          args : true,
          msg : 'password is Required'
        },
        notNull: {
          msg: 'password is Required'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty : {
          args : true,
          msg : 'email is Required'
        },
        notNull: {
          msg: 'email is Required'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate(async (instance, options) => {
      let salt = bcrypt.genSaltSync(8);
      let hash = bcrypt.hashSync(instance.password, salt);

      instance.password = hash

  });

  User.beforeValidate(async (instance, options) => {
    instance.role = 'User';

})
  return User;
};