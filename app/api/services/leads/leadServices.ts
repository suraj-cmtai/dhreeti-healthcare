import Lead from "@/app/api/model/lead";
import { connectDB } from "@/app/api/config/db";

// Define interface for lead data
export interface LeadData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
  location?: string;
  status?: string;
  reason?: string;
  date?: string;
  source?: string;
}

class LeadService {
    async createLead(lead: LeadData) {
        try {
            await connectDB();
            const newLead = await Lead.create(lead);
            return { success: true, data: newLead };
        } catch (error: any) {
            console.error("Error creating lead:", error);
            return { 
                success: false, 
                error: {
                    message: error.message || "Failed to create lead",
                    code: error.code || "UNKNOWN_ERROR",
                    status: error.status || 500
                }
            };
        }
    }

    async getLeads() {
        try {
            await connectDB();
            const leads = await Lead.find();
            return { success: true, data: leads };
        } catch (error: any) {
            console.error("Error fetching leads:", error);
            return { 
                success: false, 
                error: {
                    message: error.message || "Failed to fetch leads",
                    code: error.code || "UNKNOWN_ERROR",
                    status: error.status || 500
                }
            };
        }
    }

    async getLeadById(id: string) {
        try {
            await connectDB();
            const lead = await Lead.findById(id);
            if (!lead) {
                return { 
                    success: false, 
                    error: {
                        message: "Lead not found",
                        code: "NOT_FOUND",
                        status: 404
                    }
                };
            }
            return { success: true, data: lead };
        } catch (error: any) {
            console.error(`Error fetching lead with id ${id}:`, error);
            return { 
                success: false, 
                error: {
                    message: error.message || "Failed to fetch lead",
                    code: error.code || "UNKNOWN_ERROR",
                    status: error.status || 500
                }
            };
        }
    } 

    async updateLead(id: string, lead: Partial<LeadData>) {
        try {
            await connectDB();
            const updatedLead = await Lead.findByIdAndUpdate(id, lead, { new: true });
            if (!updatedLead) {
                return { 
                    success: false, 
                    error: {
                        message: "Lead not found",
                        code: "NOT_FOUND",
                        status: 404
                    }
                };
            }
            return { success: true, data: updatedLead };
        } catch (error: any) {
            console.error(`Error updating lead with id ${id}:`, error);
            return { 
                success: false, 
                error: {
                    message: error.message || "Failed to update lead",
                    code: error.code || "UNKNOWN_ERROR",
                    status: error.status || 500
                }
            };
        }
    } 

    async deleteLead(id: string) {
        try {
            await connectDB();
            const deletedLead = await Lead.findByIdAndDelete(id);
            if (!deletedLead) {
                return { 
                    success: false, 
                    error: {
                        message: "Lead not found",
                        code: "NOT_FOUND",
                        status: 404
                    }
                };
            }
            return { success: true, data: deletedLead };
        } catch (error: any) {
            console.error(`Error deleting lead with id ${id}:`, error);
            return { 
                success: false, 
                error: {
                    message: error.message || "Failed to delete lead",
                    code: error.code || "UNKNOWN_ERROR",
                    status: error.status || 500
                }
            };
        }
    }
}

export default new LeadService();  