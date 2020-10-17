const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8080;

mongoose.connect("mongodb://localhost/img_db")
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.get("/",(req, res)=>{
     res.render('index', {img: cards});
   

});

var cards =[{name:"Shantanu", Author:"Shantanu",link:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}];
app.post('/',(req, res)=>{
    var datain =req.body;
    cards.push(datain);

    res.redirect('/')
});

app.get("/illustration", (req, res)=>{
    res.render('illustration', {img:cards});
})


app.listen(port, ()=>{});