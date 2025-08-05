import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dispatch } from "redux";

export interface Lead {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
  location?: string;
  status: "new" | "contacted" | "interested" | "not_interested" | "converted";
  reason?: string;
  date?: string;
  source?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface LeadState {
  leads: Lead[];
  loading: boolean;
  error: string | null;
}

const initialState: LeadState = {
  leads: [],
  loading: false,
  error: null,
};

const leadSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
    setLeads: (state, action: PayloadAction<Lead[]>) => {  
      state.leads = action.payload;
      state.loading = false;
      state.error = null;
    },
    addLeadSuccess: (state, action: PayloadAction<Lead>) => {
      state.leads.push(action.payload);
      state.loading = false;
      state.error = null;
    },
    updateLeadSuccess: (state, action: PayloadAction<Lead>) => {
      const index = state.leads.findIndex(
        (lead) => lead._id === action.payload._id
      );
      if (index !== -1) {
        state.leads[index] = action.payload;
      }
      state.loading = false;
      state.error = null;
    },
    deleteLeadSuccess: (state, action: PayloadAction<string>) => {
      state.leads = state.leads.filter(
        (lead) => lead._id !== action.payload
      );
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { 
  setLeads, 
  addLeadSuccess, 
  updateLeadSuccess, 
  deleteLeadSuccess, 
  setLoading, 
  setError 
} = leadSlice.actions;

export const fetchLeads = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch("/api/routes/leads");
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch leads");
    }
    
    const data = await response.json();
    dispatch(setLeads(data));
  } catch (error: any) {
    dispatch(setError(error.message || "An error occurred while fetching leads"));
  }
};

export const addLead = (lead: Lead) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch("/api/routes/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lead),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to add lead");
    }
    
    const data = await response.json();
    dispatch(addLeadSuccess(data));
  } catch (error: any) {
    dispatch(setError(error.message || "An error occurred while adding lead"));
  }
};

export const updateLead = (lead: Lead) => async (dispatch: Dispatch) => {
  try {
    if (!lead._id) {
      throw new Error("Lead ID is required for updating");
    }
    
    dispatch(setLoading(true));
    const response = await fetch(`/api/routes/leads/${lead._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lead),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update lead");
    }
    
    const data = await response.json();
    dispatch(updateLeadSuccess(data));
  } catch (error: any) {
    dispatch(setError(error.message || "An error occurred while updating lead"));
  }
};

export const deleteLead = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch(`/api/routes/leads/${id}`, {
      method: "DELETE",
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to delete lead");
    }
    
    dispatch(deleteLeadSuccess(id));
  } catch (error: any) {
    dispatch(setError(error.message || "An error occurred while deleting lead"));
  }
};

export default leadSlice.reducer;
