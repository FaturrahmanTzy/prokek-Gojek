const sequelize = require("../../../utils/db_config.js");

const { DataTypes } = require("sequelize");

const Pesanan = sequelize.define("pesanan", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nama_menu: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    menu_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total_harga: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},
    {
        freezeTableName: true
    }
);

sequelize.sync();

module.exports = Pesanan;