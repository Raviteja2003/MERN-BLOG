import userModel from '../model/userSchema.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import asyncHandler from "express-async-handler";
import {StatusCodes} from "http-status-codes";

export const register = asyncHandler(async(req,res) => {
    const {name,email,password} = req.body;
    if(!name||!email||!password)
    {
        throw new Error("Required all details",StatusCodes.BAD_REQUEST);
    }
    const isRegistered = await userModel.findOne({email});
    if(isRegistered)
    {
        throw new Error("user alreday registred",StatusCodes.CONFLICT);
    }
    const hashedPassword = await bcrypt.hash(password,10);
    req.body.password = hashedPassword;
    const user = await userModel.create(req.body);
    return res.status(StatusCodes.CREATED).json({message:"user registered successfully"});
})

export const login = asyncHandler(async(req,res) => {
    const {email,password} = req.body;
    if(!email||!password)
    {
        throw new Error("Enter all details",StatusCodes.BAD_REQUEST);
    }
    const user = await userModel.findOne({email});
    if(!user)
    {
        throw new Error("User not found",StatusCodes.NOT_FOUND);
    }
    const match = await bcrypt.compare(password,user.password);
    if(!match)
    {
        throw new Error("Invalid credentials",StatusCodes.UNAUTHORIZED);
    }
    const token = await jwt.sign({id:user._id,email:user.email,name:user.name},process.env.SECRET_KEY);
    return res.status(StatusCodes.OK).json({message:"login successfull",token:token,user});
})

export const home = async (req,res) => {
    try {
         const userData = { email: req.email, name: req.name };
        console.log(userData);
        res.json(userData);
        } catch (error) {
        res.json({error: "some error occured"})
    }
}


