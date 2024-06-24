const userModel=require('../../models/userModel')

const  userDetailsController= async(req, res)=>{
     
    try{
        const user= await userModel.findById(req.userId)

        res.status(200).json({
            message:"user Login",
            data:user,
            success:true,
             error:false
        })
  
    }
    catch(err){ 
        res.status(400).json({
            message: err.message || err,
            success: false,
            error: true
        })

    }


}

module.exports= userDetailsController