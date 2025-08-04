import Lead from '@/app/api/model/lead';
import { connectDB } from '@/app/api/config/db';

export const createLead = async (lead: typeof Lead) => {
  await connectDB();
  const newLead = await Lead.create(lead);
  return newLead;
};

export const getLeads = async () => {
  await connectDB();
  const leads = await Lead.find();
  return leads;
};

export const getLeadById = async (id: string) => {
  await connectDB();
  const lead = await Lead.findById(id);
  return lead;
};


export const updateLead = async (id: string, lead: typeof Lead) => {
  await connectDB();
  const updatedLead = await Lead.findByIdAndUpdate(id, lead, { new: true });
  return updatedLead;
};


export const deleteLead = async (id: string) => {
  await connectDB();
  const deletedLead = await Lead.findByIdAndDelete(id);
  return deletedLead;
};