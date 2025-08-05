import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";

// Define a more complete appointment interface
export interface Appointment {
  _id?: string;
  patientName: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  doctor?: string;
  message?: string;
  status?: string;
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
    const response = await fetch("/api/routes/appointments");
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch appointments");
    }
    
    const data = await response.json();
    dispatch(setAppointments(data));
  } catch (error: any) {
    dispatch(setError(error.message || "An error occurred while fetching appointments"));
  }
};

export const addAppointment = (appointment: Appointment) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch("/api/routes/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointment),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to add appointment");
    }
    
    const data = await response.json();
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
    const response = await fetch(`/api/routes/appointments/${appointment._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointment),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update appointment");
    }
    
    const data = await response.json();
    dispatch(updateAppointmentSuccess(data));
  } catch (error: any) {
    dispatch(setError(error.message || "An error occurred while updating appointment"));
  }
};

export const deleteAppointment = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch(`/api/routes/appointments/${id}`, {
      method: "DELETE",
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to delete appointment");
    }
    
    dispatch(deleteAppointmentSuccess(id));
  } catch (error: any) {
    dispatch(setError(error.message || "An error occurred while deleting appointment"));
  }
};

export default appointmentSlice.reducer;    