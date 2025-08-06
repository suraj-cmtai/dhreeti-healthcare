import Events from "./events";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Events",
    description: "Events at Dhreeti Clinic",
};

export default function EventsPage() {
    return <Events />;
}