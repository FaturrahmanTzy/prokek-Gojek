const { DataTypes } = require("sequelize");
const sequelize = require("../../../utils/db_config.js");

const Produk = sequelize.define("produk", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nama_produk: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    harga: {
        type: DataTypes.STRING(50),
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

module.exports = Produk;