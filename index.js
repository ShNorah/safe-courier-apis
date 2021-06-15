import express from 'express';
import bodyParser from 'body-parser'

import usersRoutes from './routes/users.js';
import parcelsRoutes from './routes/parcels.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express(); //initialize express app
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/parcels', parcelsRoutes);

app.get('/api/v1/', (req, res)=>res.send('welcome to safecourier'));

app.listen(PORT, ()=>console.log(`server listening on port http://localhost:${PORT}`));

