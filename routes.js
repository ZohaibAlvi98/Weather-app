// var express = require("express");

// var router = express.Router();

module.exports = function(app){
    app.use("/",require("./api/weather"))
}

// router.get("/",function(req,res){
//     res.send("hey")
// })

// module.exports = router;