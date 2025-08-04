import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,  
  reason: String,
  source: String,
  status: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}); 

const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema);

export default Lead;