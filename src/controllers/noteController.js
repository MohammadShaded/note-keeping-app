import Note from '../models/Note.js';
export async function getNotes(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    return res.status(200).json(notes);
  } catch (err) {
    return res.status(500).json({ error: 'Server error', details: err.message });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required.' });
    }
    const note = new Note({ title, content });
    await note.save();
    return res.status(201).json(note);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: err.message });
    }
    return res.status(500).json({ error: 'Server error', details: err.message });
  }
}

