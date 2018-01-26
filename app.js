
var express = require('express'),app = express(),fs = require('fs'),gm = require('gm')
app.use(express.static('./public'));
app.set('view engine','ejs');

app.get('/',function(req,res,next){
    res.render('index');
});

app.get('/docut',function(req,res,next){
    var width = req.query.w;
    var height = req.query.h;
    var x = req.query.x;
    var y = req.query.y;
    gm('public/images/danny.jpg')
        .crop(width,height,x,y)
        .resize(100,100)
        .write('./picture/danny1.jpg',function(err){
        if(err){
            res.send('-1');
            return;
        }

        res.send('1');
    })

});

app.listen(3000);