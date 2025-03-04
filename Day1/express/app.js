const express = require("express");
const Blog = require("./models/blog");
const app = express();
const mongoose = require("mongoose");
const dbURI =
  "mongodb+srv://214g1a0511:u0d4ebWgu1x58ufY@cluster0.k7akx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(dbURI)
  .then((res) => app.listen("3000"))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
const blogs = [
  { title: "Tyler", snippet: "vgbhnujmik,ko.poiu" },
  { title: "Durden", snippet: "crtvbyunimo,p" },
  { title: "Club", snippet: "exrctcvtybybynuhnu" },
];
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog",
    snippet: "about my blog",
    body: "more about my new blog",
  });
  blog
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
app.get("/blogs", (req, res) => {
  Blog.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
app.get("/single-blog", (req, res) => {
  Blog.findById("67c68f1eebe9d13090d3a186")
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
app.get("/", (req, res) => {
  res.render("index", { title: "Home", blogs });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});
app.get("/blog/create", (req, res) => {
  res.render("create", { title: "Create a new post" });
});
app.use((req, res) => {
  res.render("404", { title: "404" });
});
// app.get("/about",(req,res)=>{
//     res.sendFile("./views/about.html",{root:__dirname})
// })
// app.get("/contact",(req,res)=>{
//     res.sendFile("./views/contact.html",{root:__dirname})
// })
// app.get("/contact-us",(req,res)=>{
//     res.redirect("/contact")
// })

// app.use((req,res)=>{
//     res.sendFile("./views/404.html",{root:__dirname})
// })
