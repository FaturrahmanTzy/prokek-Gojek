const User = require("./model.js");

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Terjadi kesalahan server" });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User tidak ditemukan" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Terjadi kesalahan server" });
  }
};

const createUser = async (req, res) => {
  try {
    const { nama, email, no_telp } = req.body;
    const foto = req.file ? req.file.filename : null; // Ambil nama file

    if (!nama || !email || !no_telp || !foto) {
      return res.status(400).json({ error: "Semua field harus diisi" });
    }

    const user = await User.create({ nama, email, no_telp, foto });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "Gagal menambahkan user", detail: error.message });
  }
};


const updateUser = async (req, res) => {
  try {
    const { nama, email, no_telp, foto } = req.body;
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User tidak ditemukan" });

    await user.update({ nama, email, no_telp, foto });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: "Gagal mengupdate user" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User tidak ditemukan" });

    await user.destroy();
    res.json({ message: "User berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ error: "Terjadi kesalahan server" });
  }
};


module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
