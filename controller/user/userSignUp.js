const userModel = require('../../models/userModel')
const bcrypt = require('bcrypt')

const userSingUpController = async (req, res) => {
    try {

        const { name, email, password } = req.body
      
        const user= await userModel.findOne({email})
       
        if(user){
            throw new Error("This user Already exist")
        }



        if (!email) {
            throw new Error("Please provide Email")

        }

        if (!password) {
            throw new Error("Please provide password")

        }

        if (!name) {
            throw new Error("Please provide name")

        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);

        if(!hashPassword){
            throw new Error("something is wrong")


        }


        const playload={
            ...req.body,
            role:"GENERAL",
            password:hashPassword
        }

        const userData = new userModel(playload)
        const savedata=  await userData.save()

        res.status(201).json({
            data:savedata,
            success:true,
            error:false,
            message:"User created Successfully"
        })

    }
    catch (err) {
        console.log(err)
        res.json({
            message: err.message || err,
            error: true,
            success: false
        })

    }
}

module.exports=userSingUpController