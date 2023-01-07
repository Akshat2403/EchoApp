import { Router } from 'express';
import {
    addAudio,
    getAudioAll,
    getAudio,
    addAudioYT,
    deleteAudio,
} from '../controllers/audio.controller.js';
import { verifyuser } from '../utils/verfication.js';
import upload from '../utils/upload.js';
const router = Router();

// Add paths here
router.post('/:uid/', verifyuser, upload.single('uploadVideo'), addAudio);
router.post('/:uid/youtube', verifyuser, addAudioYT);
router.delete('/:uid/:id', verifyuser, deleteAudio);
router.get('/', getAudioAll);
router.get('/:id', getAudio);

export default router;
