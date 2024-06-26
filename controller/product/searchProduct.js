const productModel = require("../../models/productModel")

const SearchProduct = async (req, res) => {
    try {
        const query = req.query.q
        const regex = new RegExp(query, 'i', 'g')
       

        const product = await productModel.find({
            "$or": [
                {
                    productName: regex
                },
                {
                    category: regex
                }
            ]
        })


        res.status(200).json({
            message: "Search product list",
            data: product,
            error: false,
            success: true

        })


    }
    catch (err) {
        res.status(400).json({
            message: err?.message || err,
            error: true,
            success: false

        })

    }
}

module.exports = SearchProduct