const userModel= require('../../models/userModel')

const updateUser=async(req, res)=>{
    try{

        const sessionUser=req.userId
        

        const {userId, name, email, role}=req.body

        const payload={
            ...(email && {email :email}),
            ...(name && {name :name}),
            ...(role && {role :role})
        }

        const user= await userModel.findById(sessionUser)

        const updateuser= await userModel.findByIdAndUpdate(userId, payload)

        res.status(200).json({
            message: "User Updated Successfully",
            data:updateuser,
            success: true,
            error: false
        })

    }catch(err){
        res.status(400).json({
            message: err.message || err,
            success : false,
            error: true
        })
        
    }

}

module.exports=updateUser