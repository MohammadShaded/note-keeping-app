import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, minlength: 1, maxlength: 100 },
  content: { type: String, required: true, trim: true, minlength: 1 },
  createdAt: { type: Date, default: Date.now }
});

const Note = mongoose.model('Note', noteSchema);
export default Note;