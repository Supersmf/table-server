import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { DATABASE_URL, PORT } from './config';
import routes from './src/routes';

const app = express();

app
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use('/', routes)
  .listen(PORT);

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.connection.on('error', () => console.log('⛔  Database connection error'));
mongoose.connection.once('open', () => console.log('✅  Database connect'));

console.log(`Node application running on port ${PORT}`);
