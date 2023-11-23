import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

// will call controller function

router.post('/users', UserControllers.createUser);
router.get('/api/users', UserControllers.getAllUsers);
router.get('/api/users/:userId', UserControllers.getSingleUser);

export const UserRoutes = router;
