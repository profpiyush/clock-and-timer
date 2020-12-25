var express= require("express");
var app=express();

app.use(express.static(__dirname + '/public'));


app.get("/", function(req, res){
    res.render("editor.ejs");
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server Started!!");
})