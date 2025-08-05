import Appointment from "@/app/api/model/appointment";
import { connectDB } from "@/app/api/config/db";

class AppointmentService {
    async createAppointment(appointment: typeof Appointment) {
        await connectDB();
        const newAppointment = await Appointment.create(appointment);
        return newAppointment;
    }

    async getAppointments() {
        await connectDB();
        const appointments = await Appointment.find();
        return appointments;
    }

    async getAppointmentById(id: string) {
        await connectDB();
        const appointment = await Appointment.findById(id);
        return appointment;
    } 

    async updateAppointment(id: string, appointment: any) {
        await connectDB();
        const updatedAppointment = await Appointment.findByIdAndUpdate(id, appointment, { new: true });
        return updatedAppointment;
    } 

    async deleteAppointment(id: string) {
        await connectDB();
        await Appointment.findByIdAndDelete(id);
    }   
    
    
}   

export default new AppointmentService();  