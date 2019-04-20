let express=require ("express");
let app=express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 5000;
const wordArray=require('./commonWords.json')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.get("/api/word", (req, res)=>{
    let randomWord=wordArray[Math.floor(Math.random()*wordArray.length)]
    /* console.log(req)
    console.log(body) */
    res.send(randomWord)
})

app.listen(5000,()=>{
    console.log(`running on port ${port}`)
})