import { Router } from 'express';
import {
  createProduct,
  deleteProduct,
  getProductById,
  listProducts,
  updateProduct,
} from '../controller/productController';

const productRouter = Router();

productRouter.post('/', createProduct);
productRouter.get('/:id', getProductById);
productRouter.get('/', listProducts);
productRouter.put('/:id', updateProduct);
productRouter.delete('/:id', deleteProduct);

export default productRouter;
