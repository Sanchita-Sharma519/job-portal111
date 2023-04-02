const mongoose=require('mongoose');
const bcrypt= require("bcryptjs");
const jwt= require("jsonwebtoken");

const userSchema= new mongoose.Schema({

    firstName: {
        type: String,
        trim: true,
        required: [true, 'first name is required'],
        maxlength: 32,
    },

    lastName: {
        type: String,
        trim: true,
        required: [true, 'last name is required'],
        maxlength: 32, 
    },

    email: {
        type: String,
        trim: true,
        required: [true, 'email is required'],
        unique: true,
        match:[
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },

    password: {
        type: String,
        trim: true,
        required: [true, 'password is required'],
        minlength: [true, 'password must have at least (6) characters'],
    },

    role: {
        type: Number,
        default: 0
    }


}, {timestamps: true});

userSchema.pre('save' , async function(next){
    if(!this.isModified('password')){
        next();
    }
    this.password=await bcrypt.hash(this.password,10);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password);
}

userSchema.methods.getJwtToken = function(){ 
    return jwt.sign({id: this.id}, process.env.JWT_SECRET, {
        expiresIn: 3600
    });
}

module.exports = mongoose.model("User" , userSchema);