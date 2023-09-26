import express from 'express';
import env from './env';
import APIRoute from './routes';
import { handleErrors } from '@middlewares';

const app = express();

// apply middlewares
app.use(express.json());

// Register routes
app.use('/api', APIRoute);
app.use(handleErrors);

app.listen(env.PORT, () => {
  console.log(`Server is listening at http://localhost:${env.PORT}`);
});
