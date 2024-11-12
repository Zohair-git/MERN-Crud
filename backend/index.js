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
    getRoles,
    createRoles,
    deleteRole,
    updateRole
} = require("./Controllers/UserRolesController")



// ROLES [ GET , POST ]

app.route("/userroles").get(getRoles).post(createRoles);

// ROLES [ DELETE , UPDATE ]

app.route("/userroles/:id").delete(deleteRole).put(updateRole);





app.listen(process.env.PORT,function(){

    console.log(`SERVER IS RUNNING ON THE PORT ${process.env.PORT}`);
    connectionDB();

})