import { Router } from 'express';

// Controller imports
import usersController from '../controllers/users.js';

// Utils imports
import { tryCatch } from '../utils/tryCatch.js';

// Router initialization
const router = Router();

// Create user
router.post('/users', tryCatch(usersController.createUser));

// Read user
router.get('/users/:id', tryCatch(usersController.readUser));

// Update user
router.patch('/users/:id', tryCatch(usersController.updateUser));

// Delete user
router.delete('/users/:id', tryCatch(usersController.deleteUser));

// Read all users
router.get('/users', tryCatch(usersController.readUsers));

export default router;
