import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "@/lib/store";

// Define a more complete appointment interface
export interface Appointment {
  _id?: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  service: string;
  doctor: string;
  date: string;
  time: string;
  status: string;
  notes: string;
  createdAt: string;
}

interface AppointmentState {
  appointments: Appointment[];
  loading: boolean;
  error: string | null;
}

const initialState: AppointmentState = {
  appointments: [],
  loading: false,
  error: null,
};

const appointmentSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    setAppointments: (state, action: PayloadAction<Appointment[]>) => {
      state.appointments = action.payload;
      state.loading = false;
      state.error = null;
    },
    addAppointmentSuccess: (state, action: PayloadAction<Appointment>) => {
      state.appointments.push(action.payload);
      state.loading = false;
      state.error = null;
    },
    updateAppointmentSuccess: (state, action: PayloadAction<Appointment>) => {
      const index = state.appointments.findIndex(
        (appointment) => appointment._id === action.payload._id
      );
      if (index !== -1) {
        state.appointments[index] = action.payload;
      }
      state.loading = false;
      state.error = null;
    },
    deleteAppointmentSuccess: (state, action: PayloadAction<string>) => {
      state.appointments = state.appointments.filter(
        (appointment) => appointment._id !== action.payload
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
  setAppointments,
  addAppointmentSuccess,
  updateAppointmentSuccess,
  deleteAppointmentSuccess,
  setLoading,
  setError,
} = appointmentSlice.actions;

export const fetchAppointments = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get("/api/routes/appointments");
    
    if (response.status < 200 || response.status >= 300) {
      throw new Error(response.data?.message || "Failed to fetch appointments");
    }
    
    // Handle nested data structure: response.data.data.data
    const appointmentsData = response.data?.data;
    const data = appointmentsData?.data || [];
    dispatch(setAppointments(data));
  } catch (error: any) {
    dispatch(setError(error.message || "An error occurred while fetching appointments"));
  }
};

export const addAppointment = (appointment: Appointment) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post("/api/routes/appointments", appointment, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    if (response.status < 200 || response.status >= 300) {
      throw new Error(response.data?.message || "Failed to add appointment");
    }
    
    // Handle nested data structure: response.data.data.data
    const appointmentData = response.data?.data;
    const data = appointmentData?.data;
    dispatch(addAppointmentSuccess(data));
  } catch (error: any) {
    dispatch(setError(error.message || "An error occurred while adding appointment"));
  }
};

export const updateAppointment = (appointment: Appointment) => async (dispatch: Dispatch) => {
  try {
    if (!appointment._id) {
      throw new Error("Appointment ID is required for updating");
    }
    
    dispatch(setLoading(true));
    const response = await axios.put(`/api/routes/appointments/${appointment._id}`, appointment, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    if (response.status < 200 || response.status >= 300) {
      throw new Error(response.data?.message || "Failed to update appointment");
    }
    
    const data = response.data?.data;
    dispatch(updateAppointmentSuccess(data));
  } catch (error: any) {
    dispatch(setError(error.message || "An error occurred while updating appointment"));
  }
};

export const deleteAppointment = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.delete(`/api/routes/appointments/${id}`);
    
    if (response.status < 200 || response.status >= 300) {
      throw new Error(response.data?.message || "Failed to delete appointment");
    }
    
    dispatch(deleteAppointmentSuccess(id));
  } catch (error: any) {
    dispatch(setError(error.message || "An error occurred while deleting appointment"));
  }
};

export const selectAppointments = (state: RootState) => state.appointments.appointments;
export const selectLoading = (state: RootState) => state.appointments.loading;
export const selectError = (state: RootState) => state.appointments.error;

export default appointmentSlice.reducer;    