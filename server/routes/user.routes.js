import { Router } from 'express';
import {
    getUser,
    login,
    logout,
    register,
} from '../controllers/user.controller.js';
const router = Router();
// Add paths here
// console.log(register)
router.post('/login', login);
router.post('/register', register);
router.get('/:uid', getUser);
router.get('/logout', logout);
export default router;
