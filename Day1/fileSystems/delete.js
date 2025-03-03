const fs=require("fs")
if(fs.existsSync("./text1.txt")){
    fs.unlink("./text1.txt",(err)=>{
        if(err){
            console.log(err)
        }
        console.log("file deleted")
    })
}
else{
    console.log("file doesn't exists")
}