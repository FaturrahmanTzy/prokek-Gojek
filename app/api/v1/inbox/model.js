const sequelize = require("../../../utils/db_config.js");
const { DataTypes } = require("sequelize");

const Inbox = sequelize.define("inbox", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    foto_poster: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    icon: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    deskripsi_promo: {
        type: DataTypes.STRING(250),
        allowNull: false
    }
},
    {
        freezeTableName: true
    }
);

sequelize.sync();

module.exports = Inbox;