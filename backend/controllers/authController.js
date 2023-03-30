
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

exports.signin = async function(req,res,next){
    
    try{
        const email = req.body.email;
        const password = req.body.password;
        
        if(!email){
            return next(new ErrorResponse("please add an email",403));
        }
        if(!password){
            return next(new ErrorResponse("please add a password",403));
        }
        const user= await User.create(req.body);
        if(!user){
            return next(new ErrorResponse("Invalid credentials",400));
        }
        const isMatched = await user.comparePassword(password);
        if(!isMatched){
            return next(new ErrorResponse("Invalid credentials",400)); 
        }
    }catch(error){
        next(error);
    }
}