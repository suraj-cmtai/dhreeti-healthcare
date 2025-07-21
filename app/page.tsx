import AboutUsSection from "@/components/home/about";
import DiseaseInfoSection from "@/components/home/DiseaseInfoSection";
import Hero from "@/components/home/hero";
import Service from "@/components/home/service";
import TestimonialSection from "@/components/home/testimonial";

export default function Home() {
  // Example data for multiple diseases
  const diseasesData = [
    {
      diseaseName: "Diabetes",
      bodyImage: "/images/anatomy.png",
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
      bodyImage: "/images/anatomy.png",
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
    {
      diseaseName: "Asthma",
      bodyImage: "/images/anatomy.png",
      layout: "right" as "right",
      symptoms: [
        "Shortness of Breath",
        "Chest Tightness",
        "Wheezing",
        "Coughing (especially at night)",
        "Difficulty Breathing",
        "Fatigue",
        "Rapid Breathing",
        "Frequent Respiratory Infections",
      ],
      cures: [
        "Avoid asthma triggers (dust, pollen, smoke)",
        "Use inhalers as prescribed",
        "Monitor breathing and symptoms",
        "Maintain a healthy lifestyle",
        "Get regular medical check-ups",
        "Practice breathing exercises",
        "Keep indoor air clean",
        "Follow an asthma action plan",
      ],
    },
    {
      diseaseName: "Thyroid Disorders",
      bodyImage: "/images/anatomy.png",
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
      <DiseaseInfoSection {...diseasesData[0]} />
      <Service />
      <DiseaseInfoSection {...diseasesData[1]} />
      <DiseaseInfoSection {...diseasesData[2]} />
      <DiseaseInfoSection {...diseasesData[3]} />
      <TestimonialSection />
    </>
  );
}
