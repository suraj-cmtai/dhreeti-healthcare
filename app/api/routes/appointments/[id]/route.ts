import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/app/api/config/db';
import AppointmentService from '@/app/api/services/appointment/appointmentServices';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {

    try {
        await connectDB();
        const { id } = await params;
        const appointment = await AppointmentService.getAppointmentById(id);
        return NextResponse.json(appointment);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch appointment' }, { status: 500 });
    }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        await connectDB();
        const { id } = await params;
        const appointment = await AppointmentService.updateAppointment(id, await request.json());
        return NextResponse.json(appointment);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update appointment' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        await connectDB();
        const { id } = await params;
        await AppointmentService.deleteAppointment(id);
        return NextResponse.json({ message: 'Appointment deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete appointment' }, { status: 500 });
    }
}       