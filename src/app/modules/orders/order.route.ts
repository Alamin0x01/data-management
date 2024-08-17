import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

// create order
router.post('/', OrderControllers.createOrder);

// get all orders
router.get('/', OrderControllers.getAllOrders);

// get a single order
router.get('/:orderId', OrderControllers.getSingleOrder);

export const OrderRoute = router;
