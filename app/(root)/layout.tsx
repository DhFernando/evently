import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="flex h-screen flex-col "> 
        <Header />
            <div className="flex-1 container mx-auto" >{children}</div> 
        <Footer />
      </div>
    );
  }
  