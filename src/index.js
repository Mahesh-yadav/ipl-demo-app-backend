require('dotenv').config();
import app from './app';
import { connectToDB } from './db/connection';

connectToDB(app);
