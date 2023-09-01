const multer = require("multer");

const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, next) => {
    next(null, file.originalname);
  },
});

const Upload = multer({
  storage: Storage,
}).single("testImage");

module.exports = {
  upload: Upload,
  storage: Storage,
};
