const sequelize = require("../../../utils/db_config");
const { DataTypes } = require("sequelize");

const Poster = sequelize.define("poster", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    foto_poster: {
        type: DataTypes.STRING(250),
        allowNull: false
    }
},
    {
        freezeTableName: true
    }
);

sequelize.sync();

module.exports = Poster;