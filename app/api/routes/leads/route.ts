import { NextRequest, NextResponse } from 'next/server';
import { createLead, getLeads } from '@/app/api/services/leads/leadServices';


export async function GET(request: NextRequest) {
    try {
        const leads = await getLeads();
        return NextResponse.json(leads);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
    }
}   

export async function POST(request: NextRequest) {
    try {
        const lead = await createLead(await request.json());
        return NextResponse.json(lead);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create lead' }, { status: 500 });
    }
}       