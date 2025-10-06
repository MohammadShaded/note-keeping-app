import express from 'express';
import { createNote, getNotes, updateNote, deleteNote,searchNotes } from '../controllers/noteController.js';

const router = express.Router();


router.get('/notes', getNotes);
router.get('/notes/search', searchNotes);
router.post('/notes', createNote);
router.put('/notes/:id', updateNote);
router.delete('/notes/:id', deleteNote);

export default router;