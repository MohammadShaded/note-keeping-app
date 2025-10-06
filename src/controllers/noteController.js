import Note from '../models/Note.js';
export async function deleteNote(req, res) {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) {
      const err = new Error('Note not found');
      err.status = 404;
      return next(err);
    }
    return res.status(204).send();
  } catch (err) {
    if (err.name === 'CastError') {
      err.status = 400;
      err.message = 'Invalid note ID';
      return next(err);
    }
    err.status = 500;
    return next(err);
  }
}

export async function updateNote(req, res, next) {
  try {
    const { title, content } = req.body;
    const updateFields = {};
    if (title !== undefined) updateFields.title = title;
    if (content !== undefined) updateFields.content = content;

    const note = await Note.findByIdAndUpdate(
      req.params.id,
      updateFields,
      { new: true, runValidators: true }
    );
    if (!note) {
      const err = new Error('Note not found');
      err.status = 404;
      return next(err);
    }
    return res.status(200).json(note);
  } catch (err) {
    if (err.name === 'ValidationError') {
      err.status = 400;
      return next(err);
    }
    if (err.name === 'CastError') {
      err.status = 400;
      err.message = 'Invalid note ID';
      return next(err);
    }
    err.status = 500;
    return next(err);
  }
}


export async function getNotes(req, res, next) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    return res.status(200).json(notes);
  } catch (err) {
    err.status = 500;
    return next(err);
  }
}

export async function createNote(req, res, next) {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      const err = new Error('Title and content are required.');
      err.status = 400;
      return next(err);
    }
    const note = new Note({ title, content });
    await note.save();
    return res.status(201).json(note);
  } catch (err) {
    if (err.name === 'ValidationError') {
      err.status = 400;
      return next(err);
    }
    err.status = 500;
    return next(err);
  }
}

