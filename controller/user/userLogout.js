const userLogout=(req, res)=>{
    try{
        res.clearCookie("login")

        res.json({
            message:"logged out Successfully",
            success :true,
            data: []
        })

    }catch(err){
        res.status(400).json({
            message: err.message || err,
            error : true,
            success: false
        })
    }

}

module.exports=userLogout