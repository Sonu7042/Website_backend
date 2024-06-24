const productModel= require('../../models/productModel')

const getProductController= async(req, res)=>{
    try{

        const allProduct= await productModel.find().sort({createdAt : -1})

        res.status(200).json({
            message:"All Products",
            success: true,
            error: false,
            data: allProduct
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

module.exports= getProductController