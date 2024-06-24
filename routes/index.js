const express=require('express')

const router=express.Router()

const userSingUpController=require('../controller/user/userSignUp')
const userSignInController = require('../controller/user/userSingIn')
const userDetailsController=require('../controller/user/userDetails')
const authToken=require('../middleware/authToken')
const userLogout = require('../controller/user/userLogout')
const allUsers = require('../controller/user/allUsers')
const updateUser = require('../controller/user/updateUser')
const UploadProductController = require('../controller/product/uploadProduct')
const getProductController = require('../controller/product/getProduct')
const updateProductController = require('../controller/product/updateProduct')
const getCategoryProduct = require('../controller/product/getCategoryProduct')
const getCategoryWiseProduct = require('../controller/product/getCategoryWiseProduct')
const getProductDetails = require('../controller/product/getProductDetails')
const addToCartController = require('../controller/user/addToCartController')
const countAddToCartProduct = require('../controller/user/countAddToCartProduct')
const addToCartViewController = require('../controller/user/addToCartViewProduct')


router.post('/signup', userSingUpController)
router.post('/signin',userSignInController )
router.get('/user-details', authToken, userDetailsController)
router.get('/userLogout',userLogout)


//admin Panel
router.get('/all-user', authToken, allUsers)
router.post('/update-user', authToken, updateUser)


//Product 
router.post('/upload-product', authToken, UploadProductController)
router.get('/get-product', getProductController )
router.post('/update-product', authToken,updateProductController)
router.get('/get-productCategory', getCategoryProduct)
router.post('/category-product', getCategoryWiseProduct)
router.post('/product-details', getProductDetails)


//user add to cart
router.post('/addtocart', authToken, addToCartController)
router.get('/countAddToCartProduct', authToken, countAddToCartProduct)
router.get('/view-cart-product', authToken, addToCartViewController)





module.exports= router