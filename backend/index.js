const express = require("express");
const app  = express();

const cors  = require("cors");


require("dotenv").config();


// middlewares

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())


// -- Connection


const {connectionDB} = require('./Config/connectionDB')



//--Models

const {
    getUsers, createUser
} = require("./Controllers/userController")



// ROLES [ GET , POST ]

app.route("/users").get(getUsers).post(createUser);







app.listen(process.env.PORT,function(){

    console.log(`SERVER IS RUNNING ON THE PORT ${process.env.PORT}`);
    connectionDB();

})