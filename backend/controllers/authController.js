
const User=require("../model/userModel");
const ErrorResponse = require("../utils/errorResponse");

exports.signup = async function(req,res,next){
    const email = req.body.email;
    const userexist = await User.findOne({email});
    if(userexist){
        return next(new ErrorResponse("E-mail already registered",400));
    }
    try{
        const user= await User.create(req.body);
        res.status(201).json({
            success: true,
            user
        })
    }catch(error){
        next(error);
    }
}