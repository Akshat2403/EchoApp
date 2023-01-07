import { Router } from 'express';
import {
    getAudioComments,
    addComment,
    deleteComment,
    updateComment,
} from '../controllers/comment.controller.js';
import { verifyuser } from '../utils/verfication.js';
const router = Router();
// Add paths here
router.get('/:id', getAudioComments);
router.post('/:id/:uid', verifyuser, addComment);
router.delete('/:cid/:uid', verifyuser, deleteComment);
router.put('/:cid/:uid', verifyuser, updateComment);

export default router;
