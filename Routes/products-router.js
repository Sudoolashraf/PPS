const express = require('express')
const { checkAuthUser, isAdmin } = require("../Middlewares/checkAuthUser");

const ProductsCtrl = require('../Controller/products-ctrl')

 const router = express.Router()

 router.post('/addproducts',[checkAuthUser,isAdmin], ProductsCtrl.addProducts)


 module.exports = router