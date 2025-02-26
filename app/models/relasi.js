const modelToko = require("../api/v1/toko/model.js");
const modelMenu = require("../api/v1/menu/model.js");
const modelPesanan = require("../api/v1/pesanan/model.js");

modelMenu.hasMany(modelToko, {foreignKey: "menu_id"});
modelToko.belongsTo(modelMenu, {foreignKey: "menu_id"});

modelMenu.hasMany(modelPesanan, {foreignKey: "pesanan_id"});
modelPesanan.belongsTo(modelMenu, {foreignKey: "pesanan_id"});

modelToko.belongsTo(modelPesanan, {foreignKey: "toko_id"});
modelPesanan.hasMany(modelToko, {foreignKey: "toko_id"});

module.exports = {
    modelToko,
    modelMenu,
    modelPesanan
};