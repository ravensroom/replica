import express from 'express';
import chatHandler from './chat';

const router = express.Router();

router.use('/chat', chatHandler);

export default router;
