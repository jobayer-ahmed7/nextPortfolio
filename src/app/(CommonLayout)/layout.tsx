import Footer from "@/components/shared/Footer";
import Image from "next/image";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* background image for all common component */}
      <div className="fixed inset-0 -z-10 brightness-[0.3]">
        <Image
          alt="Background Image"
          src="/assets/background.jpg"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      {/* main content above background */}
      <main className="relative z-10 min-h-screen bg-transparent text-lightGrey">
        {children}

        <Footer />
      </main>
    </> 
  );
};

export default CommonLayout;
