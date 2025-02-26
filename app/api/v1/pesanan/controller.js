const { modelPesanan, modelMenu } = require("../../../models/relasi.js");

const getData = async (req, res) => {
    try {
        const data = await modelPesanan.findAll(
            {
                include: {
                    model : modelMenu,
                    attributes: ["nama_menu"]
                }
            }
        );
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createData = async (req, res) => {
    try {
        const {nama_menu, total_harga} = req.body
        if(!nama_menu) {
            return res.json({ 
                status: 400,
                message: "Nama menu harus diisi"
            });
        }

        const tambah = await modelPesanan.create({
            nama_menu,
            total_harga
        });
        
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


const deleteData = async (req, res) => {
    try {
        const { id } = req.params;
        const hapus = await modelPesanan.destroy({
            where: {
                id: id
            }
        });
        res.status(200).json({
            message: "Data berhasil dihapus",
            data: hapus
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}
module.exports = {
    getData,
    createData,
    deleteData
};
