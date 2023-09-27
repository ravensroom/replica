import botService from '@services/botService';
import { Request, Response } from 'express';

async function respond(req: Request, res: Response) {
  const botResponse = botService.handleQuestion(req.body.userQuestion);
  res.json({ botResponse });
}

const chatController = {
  respond,
};

export default chatController;
