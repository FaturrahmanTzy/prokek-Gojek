// middleware handling form-data
const multer = require("multer");
// menentukan destinasi file gambar disimpan di dalam projek
const path = require("path");

// menentukan tipe data gambar yang diizinkan
const FILE_TYPE = {
  "image/png": "png",
  "image/jpg": "jpg",
  "image/jpeg": "jpeg",
};

// menentukan direktori penyimpanan dan nama file yang disimpan
const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, path.join(__dirname, "/uploads"));
    cb(null, "app/public/uploads/");
  },

  filename: function (req, file, cb) {
    // custom file name, sesuaikan dengan kebutuhan
    // bisa pakai format : sampul-tgl-RandomInt.extension
    // semua gambar akan menggunakan prefix sampul-
    const date = new Date();
    const format =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) + // Month is 0-based, so add 1
      "-" +
      date.getDate() +
      "-" +
      date.getSeconds();
    cb(null, file.fieldname + "-" + format + "." + file.mimetype.split("/")[1]);
  },
});

// memeriksa ekstensi file yang diizinkan
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = /jpeg|jpg|png|gif/;
  const extname = allowedFileTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = allowedFileTypes.test(file.mimetype);

  // Cek ekstensi dan mimetype
  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const limits = {
  fileSize: 10 * 1024 * 1024, // Maksimal ukuran file adalah 10MB
};

const uploadImage = multer({
  storage: diskStorage,
  fileFilter: fileFilter,
  limits: limits,
});

module.exports = uploadImage;
// memeriksa ukuran file yang diizinkan
