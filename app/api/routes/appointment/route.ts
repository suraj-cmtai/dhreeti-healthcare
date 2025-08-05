import { NextRequest, NextResponse } from 'next/server';
import AppointmentService from '@/app/api/services/appointment/appointmentServices';

export async function GET(request: NextRequest) {
    try {
        const appointments = await AppointmentService.getAppointments();
        return NextResponse.json(appointments);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch appointments' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const appointment = await AppointmentService.createAppointment(await request.json());
        return NextResponse.json(appointment);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create appointment' }, { status: 500 });
    }
}       