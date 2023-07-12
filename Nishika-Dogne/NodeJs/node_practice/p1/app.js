const express=require('express');
const app=express();
const morgan=require('morgan');

const port=3002;
app.use(morgan('dev'));

app.get('/user-list',(req,res)=>{
let result={
    id:12,
    name:'user-list'
}
res.status(200).json(result);
});
app.get('/user-detail',(req,res)=>{
let result={
    id:13,
    name:'user-detail'
}
res.status(200).json(result);
});

app.listen(port,()=>{
    console.log("App is listening at http://localhost:"+port);
})
