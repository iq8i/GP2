
const path = require('path');
const mongoose = require("mongoose")
const express = require('express');
const bodyParser = require('body-parser');
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const cors = require("cors")

const User = require("./models/user");
const authRoutes = require("./routes/auth")
// const errorController = require('./controllers/error');


const app = express();
const store = new MongoDBStore({
    uri: "mongodb+srv://Alwaleed991:MAAA@graduationprojectcluste.de2ve.mongodb.net/AccountLink?retryWrites=true&w=majority&appName=GraduationProjectCluster&ssl=true",
    collection: "sessions"
})


app.use(cors({ origin: ["http://localhost:3000", "http://localhost:5000"], credentials: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: "JFUC8EJ34A" , resave:false , saveUninitialized:false , store:store})) // this medillware will set the req.session for evrey requset

app.use("/api/auth",authRoutes)



mongoose.connect("mongodb+srv://Alwaleed991:MAAA@graduationprojectcluste.de2ve.mongodb.net/AccountLink?retryWrites=true&w=majority&appName=GraduationProjectCluster&ssl=true")
.then( result =>{
            app.listen(5000)
            console.log("connected!!!")
    }
)
.catch(err =>{
    console.log(err);
})



