import AboutUsSection from "@/components/home/about";
import DiseaseInfoSection from "@/components/home/DiseaseInfoSection";
import Hero from "@/components/home/hero";
import Service from "@/components/home/service";
import TestimonialSection from "@/components/home/testimonial";
import WhyChooseSection from "@/components/home/why-choose-section";

export default function Home() {
  // Example data for multiple diseases
  const diseasesData = [
    {
      diseaseName: "Diabetes",
      bodyImage: "/images/diabetes-bg.png",
      layout: "center" as "center",
      symptoms: [
        "Frequent Urination",
        "Excessive Thirst",
        "Fatigue",
        "Blurred Vision",
        "Slow Healing",
        "Weight Loss",
        "Numbness",
        "Increased Hunger",
      ],
      cures: [
        "Maintain a healthy diet with low sugar and carbs",
        "Exercise regularly for at least 30 minutes daily",
        "Monitor blood sugar levels regularly",
        "Take prescribed medications as directed",
        "Regular check-ups with your doctor",
        "Choose whole grains over refined carbs",
        "Include plenty of vegetables and lean proteins",
        "Limit sugary drinks and processed foods",
      ],
    },
    {
      diseaseName: "Hypertension",
      bodyImage: "/images/hypertension-bg.png",
      layout: "left" as "left",
      symptoms: [
        "Headaches",
        "Shortness of Breath",
        "Nosebleeds",
        "Flushing",
        "Dizziness",
        "Chest Pain",
        "Vision Problems",
        "Irregular Heartbeat",
      ],
      cures: [
        "Reduce salt intake",
        "Exercise regularly",
        "Maintain a healthy weight",
        "Limit alcohol consumption",
        "Manage stress effectively",
        "Eat a balanced diet rich in fruits and vegetables",
        "Monitor blood pressure regularly",
        "Take prescribed medications as directed",
      ],
    },
    // add tuberculosis data
    {
      diseaseName: "Tuberculosis",
      bodyImage: "/images/tuberculosis-bg.png",
      layout: "left" as "left",
      symptoms: [
        "Persistent Cough (lasting more than 3 weeks)",
        "Chest Pain",
        "Coughing up Blood",
        "Unexplained Weight Loss",
        "Fever and Chills",
        "Night Sweats",
        "Fatigue",
        "Loss of Appetite",
      ],
      cures: [
        "Complete the full course of prescribed antibiotics (usually 6-9 months)",
        "Regular follow-up with healthcare provider",
        "Maintain a nutritious diet to support recovery",
        "Avoid smoking and alcohol consumption",
        "Practice good hygiene to prevent spreading the infection",
        "Stay isolated if advised by a doctor during the initial treatment phase",
        "Monitor for any side effects of medication and report them to your doctor",
        "Get vaccinated with BCG vaccine if recommended in high-risk areas",
      ],
    },

    {
      diseaseName: "Thyroid Disorders",
      bodyImage: "/images/thyroid-bg.png",
      layout: "center" as "center",
      symptoms: [
        "Fatigue",
        "Weight Changes",
        "Mood Swings",
        "Hair Loss",
        "Dry Skin",
        "Irregular Heartbeat",
        "Sensitivity to Cold/Heat",
        "Muscle Weakness",
      ],
      cures: [
        "Take thyroid medications as prescribed",
        "Regular thyroid function tests",
        "Eat a balanced diet with adequate iodine",
        "Manage stress",
        "Exercise regularly",
        "Avoid self-medicating",
        "Consult your doctor for dosage adjustments",
        "Monitor symptoms and report changes",
      ],
    },
  ];

  return (
    <>
    <Hero />
      <AboutUsSection />
      <WhyChooseSection />
      <DiseaseInfoSection {...diseasesData[0]} />
      <Service />
      <DiseaseInfoSection {...diseasesData[1]} />
      <DiseaseInfoSection {...diseasesData[2]} />
      <DiseaseInfoSection {...diseasesData[3]} />
      <TestimonialSection />
    </>
  );
}
