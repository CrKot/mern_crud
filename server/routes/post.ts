import express from 'express';

import { Post } from '../controllers/Post'
const router = express.Router();

router.get('/', Post.getFormsList);
router.post('/', Post.addForm);
router.patch('/:id', Post.editForm);
router.delete('/:id', Post.deleteForm);

export default router;
