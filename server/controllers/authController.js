const userModel = require('../model/userSchema');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req,res) => {
    try {
        const {name,email,password} = req.body;
        if(!name || !email || !password)
        {
            res.json({error:"enter all fields"})
        }
        const isExist = await userModel.findOne({email})
        if(isExist)
        {
            res.json({message:"user already existed"})
        }
        const hashedPassword = await bycrypt.hashSync(password,10);
        req.body.password = hashedPassword;
        const user = await userModel.create(req.body);
        res.json({message:"user created successfully",user})
    } catch (error) {
        console.log(error.message);
    }
}

const login = async (req,res) => {
    try {
        const {email,password} = req.body;
        const isUser = await userModel.findOne({email})
        if(!isUser)
        {
            res.json({error: "user not found"});
        }
        else
        {
            const isMatched = await bycrypt.compare(password,isUser.password);
            if(!isMatched)
            {
                res.json({error : "Invalid credentials"});
            }
            const user = await userModel.findOne({email});
            //console.log(user);
            const token = await jwt.sign({id:user._id,email:user.email,name:user.name},process.env.SECRET_KEY);
            //console.log(token);
            res.json({status:true,token})

        }
    } catch (error) {
        console.log(user);
    }
}

const home = async (req,res) => {
    try {
        await res.json({email:req.email,name:req.name});
    } catch (error) {
        res.json({error: "some error occured"})
    }
}

module.exports = {register,login,home};
