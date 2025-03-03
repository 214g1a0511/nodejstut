const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method)
    const _=require('lodash')
    const num=_.random(0,10)
    console.log(num)
    res.setHeader('Content-Type','text/html')
    // res.write("hello!!")
    // res.end();
    let path="./views/"
    switch(req.url){
        case "/":
            path+="/index.html"
            res.statusCode=200;
            break;
        case "/about":
            path+="/about.html"
            res.statusCode=200;

            break;
        case "/about-me":
            res.statusCode=301;
            res.write("re-render to about page")

            res.setHeader("Location","/about")
            res.end()
    
            break;
            case "/contact":
                path+="/contact.html"
                res.statusCode=200
                break;
        default:
            path+="/404.html"
            res.statusCode=404;

            break
    }

    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
        }
        res.end(data);
    })
})
server.listen('8000','localhost',()=>{
    console.log("listening to port number 8000")
})