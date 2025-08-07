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
        email: string;
    }
}

// Mock events data for development and fallback
const mockEvents = [
    {
        _id: 'sample-event-1',
        title: "Free Health Checkup Camp",
        description: "Get a comprehensive health checkup including blood pressure, blood sugar, BMI, and basic eye examination.",
        date: "2023-12-15",
        time: "10:00 AM - 4:00 PM",
        location: "Dhreeti Clinic, Main Branch",
        type: "upcoming",
        category: "Health Camp",
        attendees: 150,
        image: "/events/health-camp.jpg",
        status: "registration-open",
        highlights: [
            "Free blood pressure check",
            "Free blood sugar test",
            "BMI calculation",
            "Basic eye examination",
            "Doctor consultation"
        ],
        contactInfo: {
            phone: "9901515300",
            email: "dhreeti.india@gmail.com"
        }
    },
    {
        _id: 'sample-event-2',
        title: "Diabetes Awareness Program",
        description: "Learn about diabetes prevention, management, and lifestyle modifications for better health.",
        date: "2023-12-22",
        time: "11:00 AM - 2:00 PM",
        location: "Community Hall, Near Dhreeti Clinic",
        type: "upcoming",
        category: "Awareness",
        attendees: 100,
        image: "/events/diabetes-awareness.jpg",
        status: "registration-open",
        highlights: [
            "Expert talks on diabetes",
            "Free diabetes screening",
            "Diet consultation",
            "Exercise demonstration",
            "Information booklets"
        ],
        contactInfo: {
            phone: "9279797955",
            email: "dhreeti.india@gmail.com"
        }
    },
    {
        _id: 'sample-event-3',
        title: "Women's Health Workshop",
        description: "A special workshop focused on women's health issues, preventive care, and wellness.",
        date: "2023-11-10",
        time: "10:00 AM - 1:00 PM",
        location: "Dhreeti Clinic, Main Branch",
        type: "past",
        category: "Workshop",
        attendees: 85,
        image: "/events/womens-health.jpg",
        status: "completed",
        highlights: [
            "Gynecological health talk",
            "Breast cancer awareness",
            "Nutritional guidance",
            "Mental health discussion",
            "Free basic checkup"
        ],
        contactInfo: {
            phone: "9901515300",
            email: "dhreeti.india@gmail.com"
        }
    }
];

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
            
            // If no events found in database, return mock events
            if (!events || events.length === 0) {
                console.log("No events found in database, returning mock events");
                return { success: true, data: mockEvents };
            }
            
            return { success: true, data: events };
        } catch (error: any) {
            console.error("Error fetching events:", error);
            console.log("Database connection failed, returning mock events");
            // Return mock events as fallback when database connection fails
            return { success: true, data: mockEvents };
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