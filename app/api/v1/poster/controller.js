const modelPoster = require("./model.js");

const getData = async (req, res) => {
    try {
        const tampil = await modelPoster.findAll();
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

const createData = async (req, res) => {
    try {
        const { foto_poster } = req.body;
        const tambah = await modelPoster.create({
            foto_poster
        });
        res.status(200).json({
            message: "Data berhasil ditambahkan",
            data: tambah
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    getData,
    createData
};