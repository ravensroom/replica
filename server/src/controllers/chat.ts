import botService from '@services/botService';
import { Request, Response } from 'express';

async function respond(req: Request, res: Response) {
  const reply = botService.handleQuestion(req.body.message);
  res.json(reply);
}

const chatController = {
  respond,
};

export default chatController;
