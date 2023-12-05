import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/user/user.route';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use('/api/users', UserRoutes);

const getAcontroller = (req: Request, res: Response) => {

  res.status(200).json({
      success: true,
      message: 'App is running',
    })
};

// Applicaton Routes
app.use('/', getAcontroller);

export default app;
