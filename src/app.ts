import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import ip from 'ip';
import * as dotenv from 'dotenv';
import logger from '../src/util/logger';
const knexConfig = require('../knexfile');
const knex = require('knex');

//Routes
import BaseRoutes from "../src/routes/BaseRouter";
import { ENV_VARIABLES } from './config/environment';



// Create an Express application
const app = express();
dotenv.config();

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(express.static("./public"));



// Use CORS middleware
const corsOptions = {
    origin: '*',
    // origin: 'http://localhost:4200',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  
  app.use(cors(corsOptions));

const environment = ENV_VARIABLES.stage_environement || 'development';
const connectionConfig = knexConfig[environment];

const db = knex(connectionConfig);

// Routes
const baseAPi = process.env.BASE_URL || "/api/v1";
app.use(baseAPi, BaseRoutes);

// Define a home route
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to event app backend for Course project COP4710 CI/CD!');
});


// Get the local IP address
const localIp = ip.address();
const PORT = process.env.PORT || 5050;

// Start the server
app.listen(PORT, () => {
    logger.info(`Server listening at http://localhost:${PORT} and ${localIp}:${PORT}`);
});