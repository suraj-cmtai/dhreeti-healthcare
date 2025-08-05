import Lead from '@/app/api/model/lead';
import { connectDB } from '@/app/api/config/db';

class LeadService {

  async createLead(lead:any) {
    await connectDB();
    const newLead = await Lead.create(lead);
    return newLead;
  }

  async getLeads() {
    await connectDB();
    const leads = await Lead.find();
    return leads;
  } 

  async getLeadById(id: string) {
    await connectDB();
    const lead = await Lead.findById(id);
    return lead;
  } 

  async updateLead(id: string, lead: any) {
    await connectDB();
    const updatedLead = await Lead.findByIdAndUpdate(id, lead, { new: true });
    return updatedLead;
  } 

  async deleteLead(id: string) {
    await connectDB();
    const deletedLead = await Lead.findByIdAndDelete(id);
    return deletedLead;
  } 
} 

export default new LeadService();