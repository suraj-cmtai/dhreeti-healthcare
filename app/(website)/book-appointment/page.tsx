import AppointmentForm from "./appointment";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book Appointment",
    description: "Book an appointment with our doctors",
};

export default function BookAppointment() {
    return (
        <AppointmentForm />
    );
}   