import ContactPage from "./contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Dhreeti Clinic",
  description: "Get in touch with us to schedule an appointment or for any inquiries.",
};

export default function Contact() {
  return <ContactPage />;
} 