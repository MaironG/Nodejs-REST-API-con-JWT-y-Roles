import { Router } from "express";
import  * as productsCtrl  from "../controllers/product.controller";

const router = Router();

router.get('/product', productsCtrl.GetProducts)
router.post('/product', productsCtrl.createProduct)
router.get('/product/:productId', productsCtrl.getProductById)
router.put('/product/:productId', productsCtrl.updateProductById)
router.delete('/product/:productId', productsCtrl.deleteProductById)

export default router;