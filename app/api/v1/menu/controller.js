
const { modelMenu, modelPesanan } = require("../../../models/relasi.js");

const getData = async (req, res) => {
    try {
        const tampil = await modelMenu.findAll();
        res.status(200).json({
            message: "Data Menu berhasil diambil",
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
        const { nama_menu, harga,gambar,deskripsi } = req.body;
        const tambah = await modelMenu.create({
            nama_menu,
            harga,
            gambar,
            deskripsi
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