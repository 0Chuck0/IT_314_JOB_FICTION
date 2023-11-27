const express = require("express");
const router = express.Router();
const upload  = require("../middlewares/upload");

const mongoose = require("mongoose");
const Grid = require("gridfs-stream");

let gfs;
const conn = mongoose.connection;
conn.once("open",function(){
    gfs = Grid(conn.db , mongoose.mongo);
    gfs.collection("photos");
})

router.get("/",(req,res)=>{
    return res.render("exp.hbs");
})

router.post("/upload",upload.single('file'),(req,res)=>{
    try{
    if(req.file === undefined) return res.send("you must select a file");
    const imgUrl = `${process.env.Base_Url}/file/${req.file.filename}`;
    return res.send(imgUrl);
    }
    catch{
        res.send(err);
    }
})


router.get("/:filename",async(req,res)=>{
    try{
    const file = await gfs.files.findOne({filename:req.params.filename});
    const readStream = gfs.createReadStream(file.filename);
    readStream.pipe(res);
    }
    catch{
        res.send("file not found");
    }
});

router.delete("/:filename",async(req,res)=>{
    try{
        await gfs.files.deleteOne({filename:req.params.filename});
        res.send("deleted succesfully");
    }
    catch{
        console.log(err);
        res.send("error delete")
    }
    
})


module.exports = router;