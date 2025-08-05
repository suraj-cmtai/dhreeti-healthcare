import { NextResponse } from "next/server";
import AppointmentService from "@/app/api/services/appointment/appointmentServices";

// Get all appointments (GET)
export async function GET() {
    try {
        const appointments = await AppointmentService.getAppointments();
        return NextResponse.json({
            statusCode: 200,
            message: "Appointments fetched successfully",
            data: appointments,
            errorCode: "NO",
            errorMessage: "",
        }, { status: 200 });
    } catch (error: any) {
        console.error("Error in GET /api/appointments:", error);
        return NextResponse.json({
            statusCode: 500,
            errorCode: "INTERNAL_ERROR",
            errorMessage: error.message || "Internal Server Error",
        }, { status: 500 });
    }
}

// Add a new appointment (POST)
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const newAppointment = await AppointmentService.createAppointment(body);
        console.log("Appointment created successfully:", newAppointment);
        return NextResponse.json({
            statusCode: 201,
            message: "Appointment added successfully",
            data: newAppointment,
            errorCode: "NO",
            errorMessage: "",
        }, { status: 201 });
    } catch (error: any) {
        console.error("Error in POST /api/appointments:", error);
        return NextResponse.json({
            statusCode: 500,
            errorCode: "INTERNAL_ERROR",
            errorMessage: error.message || "Internal Server Error",
        }, { status: 500 });
    }
}
