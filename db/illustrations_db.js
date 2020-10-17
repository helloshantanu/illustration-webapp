const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/test");

var illuschema = new mongoose.Schema({
    name: String,
    date: String,
    link: String
    
});

var img = mongoose.model("img", illuschema);

var shantanu = new img({
    name: "Shantanu",
    date: "14-10-2020",
    link: "https://images.pexels.com/photos/3607083/pexels-photo-3607083.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
});

shantanu.save((err, img)=>{
    if(err){
        console.log("Error");
    }
    else{
        console.log("ok");
        console.log(img);
    }
});