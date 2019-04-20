let express=require ("express");
let app=express();
const port = process.env.PORT || 8081;


app.get("/", (req, res)=>{
    res.sendFile('root/game/index.html')
})

app.listen(8081,()=>{
    console.log(`running on port ${port}`)
})