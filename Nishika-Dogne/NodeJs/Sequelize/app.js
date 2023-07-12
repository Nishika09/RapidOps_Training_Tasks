const express=require("express");
const app= express();

const port=8000;

app.get('/',(req,res)=>{
    res.send("home page");
})
app.listen(port,()=>{
    console.log(`app is listening at port http://localhost:${port}`)
})