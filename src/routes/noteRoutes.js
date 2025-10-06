import express from 'express';
import { createNote, getNotes, updateNote, deleteNote } from '../controllers/noteController.js';

const router = express.Router();


router.get('/notes', getNotes);
router.post('/notes', createNote);
router.put('/notes/:id', updateNote);
router.delete('/notes/:id', deleteNote);

export default router;