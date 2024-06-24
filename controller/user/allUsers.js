const userModel= require('../../models/userModel')

const AllUsers=async(req, res)=>{
    try{
      
      const alluser= await userModel.find()

      res.status(200).json({
        message: "All users",
        data: alluser,
        success: true,
        error : false
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

module.exports =AllUsers