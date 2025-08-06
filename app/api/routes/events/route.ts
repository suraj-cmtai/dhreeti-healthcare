import { NextResponse } from "next/server";
import EventService from "@/app/api/services/events/eventServices";

// Get all events (GET)
export async function GET() {
    try {
        const events = await EventService.getEvents();
        return NextResponse.json({
            statusCode: 200,
            message: "Events fetched successfully",
            data: events,
            errorCode: "NO",
            errorMessage: "",
        }, { status: 200 });
    } catch (error: any) {
        console.error("Error in GET /api/events:", error);
        return NextResponse.json({
            statusCode: 500,
            errorCode: "INTERNAL_ERROR",
            errorMessage: error.message || "Internal Server Error",
        }, { status: 500 });
    }
}

// Add a new event (POST)
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const newEvent = await EventService.createEvent(body);
        console.log("Event created successfully:", newEvent);
        return NextResponse.json({
            statusCode: 201,
            message: "Event added successfully",
            data: newEvent,
            errorCode: "NO",
            errorMessage: "",
        }, { status: 201 });
    } catch (error: any) {
        console.error("Error in POST /api/events:", error);
        return NextResponse.json({
            statusCode: 500,
            errorCode: "INTERNAL_ERROR",
            errorMessage: error.message || "Internal Server Error",
        }, { status: 500 });
    }
}
