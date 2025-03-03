const express=require('express')

const app=express();
app.get("/",(req,res)=>{
    res.sendFile("./views/index.html",{root:__dirname})

})
app.get("/about",(req,res)=>{
    res.sendFile("./views/about.html",{root:__dirname})
})
app.get("/contact",(req,res)=>{
    res.sendFile("./views/contact.html",{root:__dirname})
})
app.get("/contact-us",(req,res)=>{
    res.redirect("/contact")
})

app.use((req,res)=>{
    res.sendFile("./views/404.html",{root:__dirname})
})
app.listen('3000')