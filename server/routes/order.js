import express from 'express';

import { getOrder } from '../controllers/order.js';

const router = express.Router();

router.post('/', getOrder);

export default router;