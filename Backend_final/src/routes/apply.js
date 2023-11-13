const express = require("express");
const router = express.Router();
const {loggedinonly} = require("../middlewares/auth");
const jwt = require("jsonwebtoken");
const apply = require("../models/apply");

router.post("/", async(req, res) => {

    const body  = req.body;
    let payload = jwt.verify(req.cookies.jwt, 'ehewlkjjfsafasjflkasfjjkfsjflkasjffjsjasfasffafa' );

    let check = await apply.findOne({
        $and: [
            { job_id: parseInt( body.id ) },
            { job_seekerid: payload._id },
        ]
    });

   

    if ( check ) {
        return res.json({
            'success':'user already applied for the job'
        });
    }

        const myData = new apply({
            job_id: parseInt( body.id ),
            job_seekerid: payload._id,
        });

        const job_app = await myData.save();

    return res.json(job_app);
})

module.exports = router;