var express=require('express');
var ejs=require('ejs')
var bodyParser=require('body-parser')
var mongoose=require('mongoose').set('debug', true);

var app=express()

mongoose.connect("mongodb://localhost/furnicom")
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({ extended: false }))

var furnitureSchema=new mongoose.Schema({
    category:String,
    name:String,
    price:Number,
    description:String,
    image:String
})

var furniture=mongoose.model("Product", furnitureSchema)
app.get('/', function(req, res)
{
    res.render('home');
})

app.get('/sofas', function(req, res)
{
    furniture.find({"category":"sofa"}, function(err, furn)
    {
        if(err)
        {
            console.log("Error occur")
            console.log(err)
        }
        else{
            res.render('sofas', {products:furn})
        }
    })
    
})

app.get('/tables', function(req, res)
{
    furniture.find({"category":"tables"}, function(err, furn)
    {
        if(err)
        {
            console.log("Error Occur")
            console.log(err)
        }
        else{
            res.render('tables',{products:furn})
        }
    })
})

app.listen(3000, function()
{
    console.log("server is running at port 3000")
})

