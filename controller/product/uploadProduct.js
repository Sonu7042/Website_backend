const productModel = require("../../models/productModel")
const uploadProductPermission =require('../../helpers/permission')


const UploadProductController = async (req, res) => {
    try {

        const sessionUserId = req.userId
        // console.log(sessionUserId)
        if (!uploadProductPermission(sessionUserId)) {
            throw new error("Permission denied")
        }



        const uploadProduct = new productModel(req.body)
        const saveProduct = await uploadProduct.save()

        res.status(200).json({
            message: "Product upload Successfully",
            success: true,
            error: false,
            data: saveProduct
        })

    }
    catch (err) {
        res.status(400).json({
            message: err.message || err,
            success: false,
            error: true

        })

    }

}


module.exports = UploadProductController