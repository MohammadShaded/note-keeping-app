import express from 'express';
import dotenv from 'dotenv';
import { connect } from './db.js';
import noteRoutes from './routes/noteRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use(noteRoutes);

app.get('/', (req, res) => res.json({ status: 'ok', message: 'Note Keeping API' }));

const PORT = process.env.PORT || 3000;

async function start() {
  await connect();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

start();