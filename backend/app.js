require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//const ejs=require("ejs");
const morgan=require("morgan");
const mongoose = require("mongoose");
const errorHandler = require("./middleware/error");
//const session=require("express-session");
//const passport=require("passport");
//onst passportLocalMongoose=require("passport-local-mongoose");
var cors = require('cors');

const cookieParser = require("cookie-parser");


mongoose.connect("mongodb://127.0.0.1:27017/jobDB",{useNewUrlParser: true,useUnifiedTopology: true,
});

app.use(morgan('dev'));
app.use(bodyParser.json({limit: "5mb"}));
app.use(bodyParser.urlencoded({
    limit: "5mb",
    extended: true
}));
app.use(cookieParser());
app.use(cors());
app.use(errorHandler);

//port
const port = process.env.PORT || 9000;

app.listen(port,function(){
    console.log("Server started on port 9000");
});

