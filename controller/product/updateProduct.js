const uploadProductPermission= require('../../helpers/permission')
const productModel = require('../../models/productModel')


const updateProductController=async(req, res)=>{

    try{


        if(!uploadProductPermission(req.userId)){
            throw new Error("Permission denied")
        }

        const {_id, ...resBody}=req.body

        const updateProduct= await productModel.findByIdAndUpdate(_id, resBody)

        res.status(200).json({
            message:'Product update Successfully',
            data:updateProduct,
            error:false,
            success: true
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


module.exports=updateProductController
