const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

const storage = new GridFsStorage({
    url: "mongodb://127.0.0.1:27017/Randome",
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {

        const match = ["image/png", "image/jpeg", "image/jpg"];

        if (match.indexOf(file.mimetype) === -1) {
            const error = new Error("File format not supported");
            console.log("File format not supported");
            return ('<script> alert("file format not matched"); window.location ="./" </script> ');
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-image-${file.originalname}`
        };
    }
});

module.exports = multer({ storage });