import { Router } from 'express';
import {
    getAudioComments,
    addComment,
    deleteComment,
    updateComment,
} from '../controllers/comment.controller.js';
const router = Router();
// Add paths here
router.get('/:id', getAudioComments);
router.post('/:id', addComment);
router.delete('/:cid', deleteComment);
router.put('/:cid', updateComment);

export default router;
