import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';

// Create an Express application
const app = express();
dotenv.config();

// Define a route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
});

// Start the server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});