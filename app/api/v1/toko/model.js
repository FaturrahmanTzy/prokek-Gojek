const { DataTypes } = require("sequelize");
const sequelize = require("../../../utils/db_config");

const Toko = sequelize.define("toko", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nama_toko: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    menu_id : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    deskripsi: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    logo: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    benner: {
        type: DataTypes.STRING(250), 
        allowNull: false
    },
    menu_items: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
}, 
{
    freezeTableName: true
});

sequelize.sync({ force: false });

module.exports = Toko;