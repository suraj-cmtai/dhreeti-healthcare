import PrivacyPolicyPage from "./privacy-policy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Dhreeti Clinic",
  description: "Read our privacy policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyPage />;
}