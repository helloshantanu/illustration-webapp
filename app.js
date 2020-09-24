const express = require('express');
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.get("/",(req, res)=>{
     res.render('index');

});

var cards =[{name: "shantanu",author: '', img : "./img/cityscapes.png"}];
app.post('/',(req, res)=>{
    var datain =req.body;
    cards.push(datain);
    console.log(cards[1].img);
    res.redirect('illustration')
});

app.get("/illustration", (req, res)=>{
    res.render('illustration', {data:cards});
})


app.listen(port, ()=>{});