const fs=require("fs")
fs.readFile("./text.txt",(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})
console.log("last line")