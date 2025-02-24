const sequelize = require("../../../utils/db_config.js");
const { DataTypes } = require("sequelize");

const Menu = sequelize.define("menu", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nama_menu: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    harga: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    gambar: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    deskripsi: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
}, {
    freezeTableName: true
});

sequelize.sync();

module.exports = Menu;
