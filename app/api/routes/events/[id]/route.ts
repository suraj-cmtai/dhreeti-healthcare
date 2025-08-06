import { NextRequest, NextResponse } from 'next/server';
import EventService from '@/app/api/services/events/eventServices';


export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const event = await EventService.getEventById(id);
        return NextResponse.json(event);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch event' }, { status: 500 });
    }
}   

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const event = await EventService.updateEvent(id, await request.json());
        return NextResponse.json(event);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update event' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        await EventService.deleteEvent(id);
        return NextResponse.json({ message: 'Event deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete event' }, { status: 500 });
    }   
}       