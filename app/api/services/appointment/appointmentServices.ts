import Appointment from "@/app/api/model/appointment";
import { connectDB } from "../../config/db";

// Define interface for appointment data
export interface AppointmentData {
    patientName: string;
    patientPhone: string;
    patientEmail: string;
    service: string;
    doctor: string;
    date: string;
    time: string;
    status: string;
    notes: string;
}

class AppointmentService {
    async createAppointment(appointment: AppointmentData) {
        try {
            await connectDB();
            console.log("appointment", appointment);
            const newAppointment = await Appointment.create(appointment);
            return { success: true, data: newAppointment };
        } catch (error: any) {
            console.error("Error creating appointment:", error);
            return {
                success: false,
                error: {
                    message: error.message || "Failed to create appointment",
                    code: error.code || "UNKNOWN_ERROR",
                    status: error.status || 500
                }
            };
        }
    }

    async getAppointments() {
        try {
            await connectDB();
            const appointments = await Appointment.find();
            return { success: true, data: appointments };
        } catch (error: any) {
            console.error("Error fetching appointments:", error);
            return {
                success: false,
                error: {
                    message: error.message || "Failed to fetch appointments",
                    code: error.code || "UNKNOWN_ERROR",
                    status: error.status || 500
                }
            };
        }
    }

    async getAppointmentById(id: string) {
        try {
            await connectDB();
            const appointment = await Appointment.findById(id);
            if (!appointment) {
                return {
                    success: false,
                    error: {
                        message: "Appointment not found",
                        code: "NOT_FOUND",
                        status: 404
                    }
                };
            }
            return { success: true, data: appointment };
        } catch (error: any) {
            console.error(`Error fetching appointment with id ${id}:`, error);
            return {
                success: false,
                error: {
                    message: error.message || "Failed to fetch appointment",
                    code: error.code || "UNKNOWN_ERROR",
                    status: error.status || 500
                }
            };
        }
    }

    async updateAppointment(id: string, appointment: Partial<AppointmentData>) {
        try {
            await connectDB();
            const updatedAppointment = await Appointment.findByIdAndUpdate(id, appointment, { new: true });
            if (!updatedAppointment) {
                return {
                    success: false,
                    error: {
                        message: "Appointment not found",
                        code: "NOT_FOUND",
                        status: 404
                    }
                };
            }
            return { success: true, data: updatedAppointment };
        } catch (error: any) {
            console.error(`Error updating appointment with id ${id}:`, error);
            return {
                success: false,
                error: {
                    message: error.message || "Failed to update appointment",
                    code: error.code || "UNKNOWN_ERROR",
                    status: error.status || 500
                }
            };
        }
    }

    async deleteAppointment(id: string) {
        try {
            await connectDB();
            const deletedAppointment = await Appointment.findByIdAndDelete(id);
            if (!deletedAppointment) {
                return {
                    success: false,
                    error: {
                        message: "Appointment not found",
                        code: "NOT_FOUND",
                        status: 404
                    }
                };
            }
            return { success: true, data: deletedAppointment };
        } catch (error: any) {
            console.error(`Error deleting appointment with id ${id}:`, error);
            return {
                success: false,
                error: {
                    message: error.message || "Failed to delete appointment",
                    code: error.code || "UNKNOWN_ERROR",
                    status: error.status || 500
                }
            };
        }
    }
}

export default new AppointmentService();  