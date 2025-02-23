import sequelize from "../../../utils/db_config";
import { DataTypes } from "sequelize";

const Menu = sequelize.define("menu", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull : false
    },
    nama_menu : {
        type: DataTypes.STRING(250),
        allowNull : false
    },
    harga : {
        type: DataTypes.INTEGER,
        allowNull : false
    },
    gambar : {
        type: DataTypes.STRING(250),
        allowNull : false
    },
    kategori : {
        type: DataTypes.STRING,
        allowNull : false
    },
    deskripsi : {
        type: DataTypes.STRING,
        allowNull : false
    },
    },
    {
        freezeTableName: true
    }
)

sequelize.sync();
export default Menu