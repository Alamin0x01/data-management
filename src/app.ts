import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoute } from './app/modules/products/product.route';
import { OrderRoute } from './app/modules/orders/order.route';

const app: Application = express();

// parser middleware
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', ProductRoute);
app.use('/api/orders', OrderRoute);

// server
const getAController = (req: Request, res: Response) => {
  res.send('Welcome to our Data management app');
};

// main server
app.get('/', getAController);

// 404 route
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found!',
  });
});

export default app;
