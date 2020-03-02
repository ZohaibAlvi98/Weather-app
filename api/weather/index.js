var express = require("express");
var request = require("request")

var router = express.Router();


router.get("/",function(req,res){
    res.render("index.ejs")
})

router.get("/search",function(req,res){
      var search = req.query.search
      
//    var key = "1e3791e6e00d4d2bb5669b93612a529d"
//    var url = "api.openweathermap.org/data/2.5/weather?q=" + search + "&appid=" + key;
   request("http://api.weatherstack.com/current?access_key=667a47bbe737a92f1a245acf2adc593a&query=" + search,function(error,response,body){
    var data = JSON.parse(body);
    
       if(!error && response.statusCode == 200 && data.success != false){
             
            res.render("result.ejs",{data: data})
           
        }
        else
        {
            res.redirect("back")
           
        }
   })
   
})

module.exports = router;