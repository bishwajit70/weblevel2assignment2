import express, { Application } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/user/user.route';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// Applicaton Routes
app.use('/api', UserRoutes);
// app.use('/api/users', UserRoutes);
// app.use('/api/users/:userId', UserRoutes)


export default app;
