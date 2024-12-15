import { Router } from "express";
import ProductsController from "../controllers/Products.controller";
import { validateZod } from "../middlewares/validate.middleware";
import { ProductValidator } from "../validators/product.validator";

const router: Router = Router()

router.get('/', ProductsController.getProducts);
router.post('/', validateZod(ProductValidator), ProductsController.insertProduct);

export default router;