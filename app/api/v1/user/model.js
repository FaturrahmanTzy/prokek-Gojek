const { DataTypes } = require("sequelize");
const sequelize = require("../../../utils/db_config.js");

const User = sequelize.define("user",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nama: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate : {
        isEmail: true
      }
    },
    no_telp: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    foto: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);

sequelize.sync();

module.exports = User;
