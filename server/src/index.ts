import express, { Request, Response, Application } from 'express';
import env from './env';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.listen(env.PORT, () => {
  console.log(`Server is Fire at http://localhost:${env.PORT}`);
});
