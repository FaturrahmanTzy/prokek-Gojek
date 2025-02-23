import { DataTypes } from "sequelize";
import sequelize from "../../../utils/db_config";

const Toko = sequelize.define("toko", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull : false
    },
    nama_toko : {
        type: DataTypes.STRING(100),
        allowNull : false
    },
    deskripsi : {
        type: DataTypes.STRING(250),
        allowNull : false
    },
    logo : {
        type: DataTypes.STRING(250),
        allowNull : false
    },
    benner : {
        type: Datetypes.STRING(250),
        allowNull : false
    },
    menu_items : {
        type: DataTypes.JSON,
        allowNull : false
    },
}, 
    {
        freezeTableName: true
    }
)

sequelize.sync();

export default Toko