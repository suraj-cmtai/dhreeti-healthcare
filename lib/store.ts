import { configureStore } from "@reduxjs/toolkit";
import leadReducer from "./features/leadSlice";
import appointmentReducer from "./features/appointmentSlice";

const store = configureStore({
  reducer: {
    leads: leadReducer,
    appointments: appointmentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;