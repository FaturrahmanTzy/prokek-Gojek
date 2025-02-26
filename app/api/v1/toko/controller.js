const { modelToko, modelMenu } = require("../../../models/relasi.js");

const getData = async (req, res) => {
    try {
        const tampil = await modelToko.findAll( {
            include: {
                model : modelMenu,
                attributes: ["nama_menu"]
            }
        });
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
        const { nama_toko,menu_id, deskripsi, logo, benner, menu_item  } = req.body;
        const tambah = await modelToko.create({
            nama_toko,
            menu_id,
            deskripsi,
            logo,
            benner,
            menu_item
        })
        res.status(200).json({
            message: "Data berhasil ditambahkan",
            data: tambah
        })
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