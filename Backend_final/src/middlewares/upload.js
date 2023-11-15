const multer = require("multer");
const {GridFsStorage} = require("multer-gridfs-storage");

const storage = new GridFsStorage({
    url: "mongodb://127.0.0.1:27017/Randome",
    options: { useNewUrlParser: true, useUnifiedTopology: true }, 
    file: (req, file) => {

        const match = ["image/png", "image/jpeg" , "image/jpg"];

        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-image-${file.originalname}`;
            return filename;
        }else{
            console.log("file not upload becuase it doesnt match to formate");
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-image-${file.originalname}`
        };
    }
});

module.exports = multer({ storage });
