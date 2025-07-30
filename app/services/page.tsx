import ServicesPage from "./services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services at Dhreeti Clinic",
  description: "Explore the comprehensive range of healthcare services offered by Dhreeti Clinic",
};

export default function Services() {
  return <ServicesPage />;
}