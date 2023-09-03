var express =require('express');

app=express();

app.get("/",function(req,res){
 res.send("Home Page");
});

app.post("/about",function(req,res){
    res.send("About Page");
});

app.put("/contact",function(req,res){
    res.send("Contact Page");
});

app.delete("/term",function(req,res){
    res.send("Term Page");
});

app.listen(8000,function(){
    console.log("server run success")
})