import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { RootState } from "@/lib/store";
import axios from "axios";

export interface Event {
  _id?: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: string;
  category: string;
  attendees: number;
  image: string;
  status: string;
  highlights: string[];
  contactInfo: {
    email: string;
    phone: string;
  }
}

interface EventState {
  events: Event[];
  loading: boolean;
  error: string | null;
}

const initialState: EventState = {
  events: [],
  loading: false,
  error: null,
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<{ data: Event[] }>) => {
      state.events = action.payload.data;
      state.loading = false;
      state.error = null;
    },
    addEventSuccess: (state, action: PayloadAction<Event>) => {
      state.events.push(action.payload);
      state.loading = false;
      state.error = null;
    },
    updateEventSuccess: (state, action: PayloadAction<Event>) => {
      const index = state.events.findIndex(
        (event) => event._id === action.payload._id
      );
      if (index !== -1) {
        state.events[index] = action.payload;
      }
      state.loading = false;
      state.error = null;
    },
    deleteEventSuccess: (state, action: PayloadAction<string>) => {
      state.events = state.events.filter(
        (event) => event._id !== action.payload
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
  setEvents, 
  addEventSuccess, 
  updateEventSuccess, 
  deleteEventSuccess, 
  setLoading, 
  setError 
} = eventSlice.actions;

export const fetchEvents = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get("/api/routes/events");
    // Axios always resolves unless network error, so check status
    if (response.status < 200 || response.status >= 300) {
      throw new Error(response.data?.message || "Failed to fetch events");
    }
    // Extract the actual events data from the response
    dispatch(setEvents(response.data?.data || []));
  } catch (error: any) {
    dispatch(setError(error.message || "An error occurred while fetching events"));
  }
};

export const addEvent = (event: Event) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post("/api/routes/events", event, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status < 200 || response.status >= 300) {
      throw new Error(response.data?.message || "Failed to add event");
    }
    // Extract the actual event data from the response
    const newEvent = response.data?.data;
    dispatch(addEventSuccess(newEvent));
  } catch (error: any) {
    dispatch(setError(error.message || "An error occurred while adding event"));
  }
};

export const updateEvent = (event: Event) => async (dispatch: Dispatch) => {
  try {
    if (!event._id) {
      throw new Error("Event ID is required for updating");
    }
    dispatch(setLoading(true));
    const response = await axios.put(`/api/routes/events/${event._id}`, event, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status < 200 || response.status >= 300) {
      throw new Error(response.data?.message || "Failed to update event");
    }
    // Extract the actual event data from the response
    const updatedEvent = response.data?.data;
    dispatch(updateEventSuccess(updatedEvent));
  } catch (error: any) {
    dispatch(setError(error.message || "An error occurred while updating event"));
  }
};

export const deleteEvent = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.delete(`/api/routes/events/${id}`);
    if (response.status < 200 || response.status >= 300) {
      throw new Error(response.data?.message || "Failed to delete event");
    }
    dispatch(deleteEventSuccess(id));
  } catch (error: any) {
    dispatch(setError(error.message || "An error occurred while deleting event"));
  }
};

export const selectEvents = (state: RootState) => state.events.events;
export const selectLoading = (state: RootState) => state.events.loading;
export const selectError = (state: RootState) => state.events.error;

export default eventSlice.reducer;
