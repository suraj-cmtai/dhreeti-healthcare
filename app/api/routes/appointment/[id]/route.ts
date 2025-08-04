import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/app/api/config/db';
import Appointment from '@/app/api/model/appointment';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {

    try {
        await connectDB();
        const { id } = await params;
        const appointment = await Appointment.findById(id);
        return NextResponse.json(appointment);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch appointment' }, { status: 500 });
    }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        await connectDB();
        const { id } = await params;
        const appointment = await Appointment.findByIdAndUpdate(id, await request.json(), { new: true });
        return NextResponse.json(appointment);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update appointment' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        await connectDB();
        const { id } = await params;
        await Appointment.findByIdAndDelete(id);
        return NextResponse.json({ message: 'Appointment deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete appointment' }, { status: 500 });
    }
}       