import express from 'express';
import { createNote, getNotes } from '../controllers/noteController.js';

const router = express.Router();

router.get('/notes', getNotes);
router.post('/notes', createNote);

export default router;