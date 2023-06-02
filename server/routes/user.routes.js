import { Router } from 'express';
import {
    getUser,
    login,
    logout,
    register,
} from '../controllers/user.controller.js';
const router = Router();
// Add paths here
router.post('/login', login);
router.post('/register', register);
router.get('/logout', logout);
router.get('/:uid', getUser);
export default router;
