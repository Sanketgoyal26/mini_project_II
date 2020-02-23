var express=require('express');
var ejs=require('ejs')

var app=express()
app.set('view engine','ejs')
app.get('/', function(req, res)
{
    res.render('home');
})

app.listen(3000, function()
{
    console.log("server is running at port 3000")
})

