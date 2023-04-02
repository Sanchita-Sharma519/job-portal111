const ErrorResponse = require("../utils/errorResponse");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

//check if user is authenticated
exports.isAuthenticated = async function(req,res,next){
    const {token} = req.cookies;
    //make sure token exists
    if(!token){
        return next(new ErrorResponse('Not authorized to access this route',401));
    }
    try{
        //verify token
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();
    }catch(error){
        return next(new ErrorResponse('Not authorized to access this route',401));
    }
}