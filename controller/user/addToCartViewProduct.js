const cartProduct= require('../../models/cartProduct')

const addToCartViewController= async(req, res)=>{

    try{

        const userId= req.userId

        const allProduct= await  cartProduct.find({userId : userId})

        res.status(200).json({
            message : "all Product",
            data : allProduct,
            error : false,
            success : true
        })

    }
    catch(err){
        res.status(400).json({
            message : err.message || err,
            success : false,
            error : true
        })
    }
}


module.exports= addToCartViewController