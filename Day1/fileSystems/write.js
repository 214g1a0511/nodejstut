const fs=require("fs")
fs.writeFile("./text1.txt","hello again",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("file written")
})