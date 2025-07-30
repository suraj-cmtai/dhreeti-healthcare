import AboutPage from "./about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dhreeti Clinic",
  description: "Learn more about our mission, vision, and commitment to providing quality healthcare services",
};

export default function About() {
  return <AboutPage />;
}
