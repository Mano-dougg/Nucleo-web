import { Router } from 'express';
import {
  createProduct,
  deleteProduct,
  filterProductsByQuery,
  getProductById,
  listProducts,
  updateProduct,
} from '../controller/productController';
import { ProductUpdateInputSchema } from '../../prisma/generated/zod';
import { validateSchema } from '../middleware/validateSchema';

const productRouter = Router();

// Filter route
productRouter.get('/filter', filterProductsByQuery);

productRouter.post('/',  validateSchema(ProductUpdateInputSchema), createProduct);
productRouter.get('/:id', getProductById);
productRouter.get('/', listProducts);
productRouter.put('/:id', validateSchema(ProductUpdateInputSchema), updateProduct);
productRouter.delete('/:id', deleteProduct);

export default productRouter;

