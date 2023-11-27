import { Inter } from "next/font/google";
import "./globals.css";
import { cn, constructMetadata } from "@/lib/utils";
import NavBar from "@/components/NavBar";
import Providers from "@/components/providers/Providers";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata();

// TODO: add dark team implementation

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <main className="relative flex flex-col min-h-screen">
          <Providers>
            <NavBar />

            <div className="flex-grow flex-1">{children}</div>

            <Footer />
          </Providers>
        </main>

        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
