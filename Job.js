// backend/models/Job.js
import { Schema, model } from 'mongoose';

const jobSchema = new Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  description: { type: String },
});

export default model('Job', jobSchema);
