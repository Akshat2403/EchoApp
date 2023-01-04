import { Router } from 'express';
import { login, register } from '../controllers/user.controller.js';
const router = Router();
// Add paths here
// console.log(register)
router.post('/login', login);
router.post('/register', register);

export default router;
