const modelInbox = require("./model.js");

const getData = async (req, res) => {
    try {
        const tampil = await modelInbox.findAll();
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

const create = async (req, res) => {
    try {
        const { foto_poster, icon, deskripsi_promo } = req.body;
        const tambah = await modelInbox.create({
            foto_poster,
            icon,
            deskripsi_promo
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
};

module.exports = {
    getData,
    create
};