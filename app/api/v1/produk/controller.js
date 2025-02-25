const modelProduk = require("./model.js");

const getData = async (req, res) => {
    try {
        const tampil = await modelProduk.findAll();
        res.status(200).json({
            message: "success",
            data: tampil
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getData
}