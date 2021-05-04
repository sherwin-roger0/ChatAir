const express=require("express");
const mongoose = require("mongoose");
const axios= require("axios");
const cors = require ("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({urlextended: false}))

mongoose.connect("mongodb+srv://ADMIN:tronster@9@chatair.vsu3r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connnected",() => {
  console.log("manga is connnected")
})

const Schema = mongoose.Schema;
const chatSchema= new Schema({
  profile:String,
  name: String,
  chat : String
})

const reactChat = mongoose.model('reactChat',chatSchema)


app.get("/f",(req,res)=>{
  reactChat.find({},(err,data)=>{
    res.json(data)
  })
})

app.post("/",(req,res)=>{
  const newChat = new reactChat(req.body)
  console.log(req.body);
  newChat.save((err) =>{
    if(err){
      console.log(err)
    }
  })
  res.send(200);
})

if(process.env.NODE_ENV=="production"){
    app.use(express.static('client/build'))
    const path = require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(process.env.PORT || 8000,console.log("server started"));
