const User = require("./model.js");

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Terjadi kesalahan server" });
  }
};

const createUser = async (req, res) => {
  try {
    const { nama, email, no_telp, foto } = req.body;
    const user = await User.create({ nama, email, no_telp, foto });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: "Gagal membuat user" });
  }
};




const updateUser = async (req, res) => {
  try {
    const { nama, email, no_telp, foto } = req.body;
    const user = await User.findByPk(req.params.id);
    if (!user) 
      return res.status(404).json({ 
        message : "User tidak ditemukan"
      });

    await user.update({ nama, email, no_telp, foto });
    res.json({
      message : "User berhasil diupdate",
      data: user
    });
    
  } catch (error) {
    res.status(400).json({ 
      error: "Gagal mengupdate user" 
    });
  }
};



module.exports = {
  getUsers,
  createUser,
  updateUser,
};
