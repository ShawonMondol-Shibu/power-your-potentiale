import Footer from "@/components/shared/layouts/Footer";
import Navbar from "@/components/shared/layouts/Navbar";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative container mx-auto flex min-h-full flex-col space-y-20">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
