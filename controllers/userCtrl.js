const userModel = require('../model/userModel')
const bcrypt = require('bcryptjs')
const jwt = require(`jsonwebtoken`)

//register callback
const registerController = async (req, res) => {
    try {
        console.log("set");
        console.log(req.body);
        const existingUser = await userModel.findOne({ email: req.body.email })
        if (existingUser) {
            return res.status(200).send({ message: 'user already exist', success: false })
        }
        const password = req.body.password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        req.body.password = hashedPassword
        const newUser = new userModel(req.body)
        await newUser.save()
        res.status(201).send({ message: "Register successfully", success: true });
    } catch (error) {
        res.status(500).send({ success: false, message: `Register Controller ${error.message}` })

    }
}

const loginController = async (req,res) => {
    try{
        const user = await userModel.findOne({email:req.body.email})
        if(!user){
            return res.status(200).send({message:`user not found`,success:false})

        }
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if(!isMatch){
            return res.status(200).send({message:"Invalid Email or Password",success:false})
        }
        const token =jwt.sign({id:user.__id},process.env.JWT_SECRET,{expiresIn:`Id`})
        res.status(200).send({message:"Login Success",success: true, token})
    }catch (error) {
        console.log(error);
        res.status(500).send({message:`Error is Login CTRL ${error.message}`})
    }
 };

module.exports = { loginController, registerController };