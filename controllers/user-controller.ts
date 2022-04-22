import express from 'express';
import { validationResult } from 'express-validator';
import { UserInterface } from '../models/userInterface';
import User from '../models/users';
import gravatar from 'gravatar'
import { generateHashedPassword } from '../services/auth-services';

export const registerController = async (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);
    if(errors.isEmpty()){
        try{
            const {name, email, password} = req.body;

            //check email is exist or not
            const user:UserInterface | null = await User.findOne({email});
            if(user){
                return res.status(400).json({errors: [{msg: 'User is Already Exists.'}]});
            }else{

                //generate hashed password
                const hashedPassword = await generateHashedPassword(password);

                //generate avatar url
                const avatar = gravatar.url(email, {
                    s: '200', 
                    r: 'pg', 
                    d: 'mm'}
                )

                //create a new user
                const newUser = new User({
                    name,
                    email,
                    password: hashedPassword,
                    avatar
                });
                const result = await newUser.save();
                return res.status(200).json({msg: "User Registered Successfully."})
            }
        }catch(error){
            console.log(error);
            return res.status(500).json({errors: [{msg: error}]})
        }
    }else{
        return res.status(400).json({ errors: errors.array() });
    }
}