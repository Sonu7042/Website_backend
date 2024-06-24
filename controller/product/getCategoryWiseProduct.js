const productModel=require('../../models/productModel')

const getCategoryWiseProduct=async(req, res)=>{
    try{
        const {category}=req.body || req.query
        const product= await productModel.find({category})

        res.status(200).json({
            message:"Product",
            data:product,
            success:true,
            error:false
        })

    }
    catch{
        res.status(400).json({
            message: err.message || err,
            success: false,
            error: true
        })
    }

}

module.exports= getCategoryWiseProduct