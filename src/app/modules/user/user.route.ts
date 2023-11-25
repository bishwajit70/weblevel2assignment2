import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

// will call controller function

router.post('/api/users', UserControllers.createUser);
router.get('/api/users', UserControllers.getAllUsers);
router.get('/api/users/:userId', UserControllers.getSingleUser);
// router.put('/api/users/:userId', UserControllers.updateSingleUser);
router.delete('/api/users/:userId', UserControllers.deleteUser);

export const UserRoutes = router;
