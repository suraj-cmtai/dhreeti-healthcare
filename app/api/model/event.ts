import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, enum: ['upcoming', 'past'], required: true },
  category: { type: String, required: true },
  attendees: { type: Number, required: true },
  image: { type: String, required: true },
  status: { type: String, enum: ['registration-open', 'registration-closed', 'completed'], required: true },
  highlights: [{ type: String }],
  contactInfo: {
    phone: { type: String, required: true },
    email: { type: String, required: true }
  }
}, {
  timestamps: true
});

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;