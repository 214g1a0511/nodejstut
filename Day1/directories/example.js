const { execFileSync } = require("child_process")
const fs=require("fs")

if(!fs.existsSync("./components")){
    fs.mkdir("./components",(err)=>{
        if(err){
            console.log(err)
        }
        console.log("folder created")
    })

}
else{
    fs.rmdir("./components",(err)=>{
        if(err){
            console.log(err)
        }
        console.log("folder deleted")
    })

}
