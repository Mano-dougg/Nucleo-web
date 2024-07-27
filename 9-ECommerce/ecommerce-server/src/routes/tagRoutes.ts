import { Router } from 'express';
import { TagCreateInputSchema, TagUpdateInputSchema } from '../../prisma/generated/zod/index';
import {
  createTag,
  deleteTag,
  getTagById,
  listTags,
  updateTag,
} from '../controller/tagController';
import { validateSchema } from '../middleware/validateSchema';

const categoryRouter = Router();

categoryRouter.post('/', validateSchema(TagCreateInputSchema), createTag);
categoryRouter.get('/:id', getTagById);
categoryRouter.get('/', listTags);
categoryRouter.put('/:id', validateSchema(TagUpdateInputSchema), updateTag);
categoryRouter.delete('/:id', deleteTag);

export default categoryRouter;
