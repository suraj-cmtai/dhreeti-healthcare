import TermsPage from "./terms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - Dhreeti Clinic",
  description: "Read our terms and conditions to understand how we operate and what we expect from you.",
};  

export default function Terms() {
  return <TermsPage />;
}