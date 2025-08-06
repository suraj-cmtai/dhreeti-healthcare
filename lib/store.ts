import { configureStore } from "@reduxjs/toolkit";
import leadReducer from "./features/leadSlice";
import appointmentReducer from "./features/appointmentSlice";
import eventReducer from "./features/eventSlice";

const store = configureStore({
  reducer: {
    leads: leadReducer,
    appointments: appointmentReducer,
    events: eventReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;