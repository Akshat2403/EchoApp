import { Router } from 'express';

const router = Router();
// Add paths here
router.get('/:id', getAudioComments)
router.post('/:id', addComment)
router.delete("/:cid", deleteComment)
router.put("/:cid", updateComment)

export default router;
