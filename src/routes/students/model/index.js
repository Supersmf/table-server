import mongoose, { Schema } from 'mongoose';

const studentsSchema = new Schema({
  id: String,
  name: String,
  avatar: String,
  email: String,
  phone: String,
  status: String,
});

export default mongoose.model('Students', studentsSchema, 'students');
