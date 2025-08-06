import Event from "@/app/api/model/event";
import { connectDB } from "@/app/api/config/db";

// Define interface for event data
export interface EventData {
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    type: string;
    category: string;
    attendees: number;
    image: string;
    status: string;
    highlights: string[];
    contactInfo: {
        phone: string;
    }
}

class EventService {
    async createEvent(event: EventData) {
        try {
            await connectDB();
            const newEvent = await Event.create(event);
            return { success: true, data: newEvent };
        } catch (error: any) {
            console.error("Error creating event:", error);
            return {
                success: false,
                error: {
                    message: error.message || "Failed to create event",
                    code: error.code || "UNKNOWN_ERROR",
                    status: error.status || 500
                }
            };
        }
    }

    async getEvents() {
        try {
            await connectDB();
            const events = await Event.find();
            return { success: true, data: events };
        } catch (error: any) {
            console.error("Error fetching events:", error);
            return {
                success: false,
                error: {
                    message: error.message || "Failed to fetch events",
                    code: error.code || "UNKNOWN_ERROR",
                    status: error.status || 500
                }
            };
        }
    }

    async getEventById(id: string) {
        try {
            await connectDB();
            const event = await Event.findById(id);
            if (!event) {
                return {
                    success: false,
                    error: {
                        message: "Event not found",
                        code: "NOT_FOUND",
                        status: 404
                    }
                };
            }
            return { success: true, data: event };
        } catch (error: any) {
            console.error(`Error fetching event with id ${id}:`, error);
            return {
                success: false,
                error: {
                    message: error.message || "Failed to fetch event",
                    code: error.code || "UNKNOWN_ERROR",
                    status: error.status || 500
                }
            };
        }
    }

    async updateEvent(id: string, event: Partial<EventData>) {
        try {
            await connectDB();
            const updatedEvent = await Event.findByIdAndUpdate(id, event, { new: true });
            if (!updatedEvent) {
                return {
                    success: false,
                    error: {
                        message: "Event not found",
                        code: "NOT_FOUND",
                        status: 404
                    }
                };
            }
            return { success: true, data: updatedEvent };
        } catch (error: any) {
            console.error(`Error updating event with id ${id}:`, error);
            return {
                success: false,
                error: {
                    message: error.message || "Failed to update event",
                    code: error.code || "UNKNOWN_ERROR",
                    status: error.status || 500
                }
            };
        }
    }

    async deleteEvent(id: string) {
        try {
            await connectDB();
            const deletedEvent = await Event.findByIdAndDelete(id);
            if (!deletedEvent) {
                return {
                    success: false,
                    error: {
                        message: "Event not found",
                        code: "NOT_FOUND",
                        status: 404
                    }
                };
            }
            return { success: true, data: deletedEvent };
        } catch (error: any) {
            console.error(`Error deleting event with id ${id}:`, error);
            return {
                success: false,
                error: {
                    message: error.message || "Failed to delete event",
                    code: error.code || "UNKNOWN_ERROR",
                    status: error.status || 500
                }
            };
        }
    }
}

export default new EventService();  