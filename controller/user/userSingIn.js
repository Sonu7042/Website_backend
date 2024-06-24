const jwt = require('jsonwebtoken')
const userModel = require('../../models/userModel')
const bcrypt = require('bcrypt')



const userSignInController = async (req, res) => {
    try {
        
        const { email, password } = req.body

        if (!email) {
            throw new Error("Please provide email")
        }

        if (!password) {
            throw new Error("Please provide password")
        }

        const user = await userModel.findOne({ email })

        if (!user) {
            throw new Error("User not found")
        }

        const checkPassword = await bcrypt.compare(password, user.password)

        if (checkPassword) {
            const tokenData = {
                _id: user._id,
                email: user.email
            }

            const token= await jwt.sign(tokenData, process.env.JSON_SERECT_KEY, { expiresIn: 7 * 24 * 60 * 60});

            const tokenOption={
                httpOnly:true,
                secure: true
            }

            res.cookie('login', token, tokenOption).json({
                message:"Login Successfully",
                data:token,
                success:true,
                error:false
            })





        } else {
            throw new Error("Please check password")

        }
    }
    catch (err) {
        res.send({
            message: err.message || err,
            error: true,
            success: false

        })

    }


}

module.exports = userSignInController