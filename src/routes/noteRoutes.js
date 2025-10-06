import express from 'express';
import { createNote, getNotes, updateNote } from '../controllers/noteController.js';

const router = express.Router();

router.get('/notes', getNotes);
router.post('/notes', createNote);
router.put('/notes/:id', updateNote);

export default router;