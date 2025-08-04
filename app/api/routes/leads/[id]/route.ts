import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/app/api/config/db';
import Lead from '@/app/api/model/lead';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {

    try {
        await connectDB();
        const { id } = await params;
        const lead = await Lead.findById(id);
        return NextResponse.json(lead);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch lead' }, { status: 500 });
    }
}       

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        await connectDB();
        const { id } = await params;
        const lead = await Lead.findByIdAndUpdate(id, await request.json(), { new: true });
        return NextResponse.json(lead);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update lead' }, { status: 500 });
    }   
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        await connectDB();
        const { id } = await params;
        await Lead.findByIdAndDelete(id);
        return NextResponse.json({ message: 'Lead deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete lead' }, { status: 500 });
    }
}   