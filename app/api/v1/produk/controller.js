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

const createData = async (req, res) => {
    try {
        const { nama_produk, harga, gambar, deskripsi } = req.body;
        const tambah = await modelProduk.create({
            nama_produk,
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
}