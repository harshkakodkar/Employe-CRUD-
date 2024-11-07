import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import employeeRoutes from './routes/employeeRoutes';
import connectDB from './config/database';

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', employeeRoutes);

export default app;
