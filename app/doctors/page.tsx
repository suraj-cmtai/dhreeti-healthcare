import DoctorsPage from "./doctors";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Doctors",
  description: "Meet the team of experienced doctors at Dhreeti Clinic",
};

export default function Doctors() {
  return <DoctorsPage />;
}