import { NextRequest, NextResponse } from 'next/server';
import LeadService from '@/app/api/services/leads/leadServices';


export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const lead = await LeadService.getLeadById(id);
        return NextResponse.json(lead);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch lead' }, { status: 500 });
    }
}   

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const lead = await LeadService.updateLead(id, await request.json());
        return NextResponse.json(lead);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update lead' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        await LeadService.deleteLead(id);
        return NextResponse.json({ message: 'Lead deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete lead' }, { status: 500 });
    }   
}       