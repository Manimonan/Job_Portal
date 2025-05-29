import './config/instrument.js';
import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/db.js';
import * as Sentry from "@sentry/node"

// initialize express app
const app = express();

//Connect to MongoDB
await connectDB();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('Welcome to the server!');
}
);




// start server
const PORT = process.env.PORT || 5001;
// Initialize Sentry
Sentry.setupExpressErrorHandler(app)
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});