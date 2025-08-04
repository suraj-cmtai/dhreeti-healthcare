import Appointment from "@/app/api/model/appointment";
import { connectDB } from "@/app/api/config/db";

export const createAppointment = async (appointment: typeof Appointment) => {
  await connectDB();
  const newAppointment = await Appointment.create(appointment);
  return newAppointment;
};

export const getAppointments = async () => {
  await connectDB();
  const appointments = await Appointment.find();
  return appointments;
};

export const updateAppointment = async (id: string, appointment: typeof Appointment) => {
  await connectDB();
  const updatedAppointment = await Appointment.findByIdAndUpdate(id, appointment, { new: true });
  return updatedAppointment;
};

export const deleteAppointment = async (id: string) => {
  await connectDB();
  const deletedAppointment = await Appointment.findByIdAndDelete(id);
  return deletedAppointment;
};

export const getAppointmentById = async (id: string) => {
  await connectDB();
  const appointment = await Appointment.findById(id);
  return appointment;
};