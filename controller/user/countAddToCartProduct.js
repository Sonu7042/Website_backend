const cartProduct= require('../../models/cartProduct')


const countAddToCartProduct = async (req, res) => {

    try{

        const userId= req.userId

        const count =  await cartProduct.countDocuments({userId})

        res.status(200).json({
            data: {
                count : count

            },
            message : "Ok",
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


module.exports = countAddToCartProduct