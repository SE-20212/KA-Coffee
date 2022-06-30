import express from 'express';

import { getOrder } from '../controllers/order.js';

const  router = express.Router();

router.get('/order', getOrder);

export default router;