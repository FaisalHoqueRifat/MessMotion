const express = require("express");
const {connectMongoDB} = require("./connection");
const cors = require('cors');
const app = express();
const PORT = 8081;


//middlewares
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
  }));



connectMongoDB("mongodb+srv://faisalhoque029:A5buzYskWZPbcPqr@cluster0.pcm59.mongodb.net/MessMotion")
    .then( () => {
        console.log("connect to MongoDB");
    })
    .catch( (err) => {
        console.log(err);
    })

//routes


app.listen(PORT, () => console.log(`Server Stated at Port ${PORT}`));