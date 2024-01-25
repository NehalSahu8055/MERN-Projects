import express from 'express';
import { controllers } from '../controllers/common/control.js';

const postRouter = express.Router();
const { create, getAll, get, update, replace, remove } =
  controllers('posts.json');

postRouter
  .post('', create)
  .get('', getAll)
  .get('/:id', get)
  .put('/:id', update)
  .patch('/:id', replace)
  .delete('/:id', remove);

export { postRouter };
