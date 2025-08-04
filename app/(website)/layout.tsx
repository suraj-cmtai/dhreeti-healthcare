import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-[72px]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}