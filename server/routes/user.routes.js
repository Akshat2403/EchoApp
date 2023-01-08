import { Router } from 'express';
import { getUser, login, register } from '../controllers/user.controller.js';
const router = Router();
// Add paths here
// console.log(register)
router.post('/login', login);
router.post('/register', register);
router.get('/:uid', getUser);
export default router;
