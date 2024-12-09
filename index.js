import express from "express";
import axios from "axios";

const app=express();
const port=3000;


app.use(express.static("public"));

app.get("/",(req,res)=>{
    
    res.render("index.ejs",{
        question:"Refresh to know more",
        answer:""
    });
});

app.get("/getriddle", async(req,res)=>{
    try{
        const response=await axios.get("https://riddles-api.vercel.app/random");
        const result=response.data;
    
    res.render("index.ejs",{
        question:result.riddle,
        answer:result.answer,

    });
    }
    catch(error){
        res.status(404).send(error.message);
      }
})
app.listen(port,()=>{
    console.log(`Server is running in port ${port}`);
})