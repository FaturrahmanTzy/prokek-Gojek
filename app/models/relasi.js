const modelToko = require("../api/v1/toko/model.js");
const modelMenu = require("../api/v1/menu/model.js");


modelMenu.hasMany(modelToko, {foreignKey: "menu_id"});
modelToko.belongsTo(modelMenu, {foreignKey: "menu_id"});

module.exports = {
    modelToko,
    modelMenu
};