import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer/footer";
import { montserrat } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "NextStore",
  description: "Your next favorite store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <header>
          <NavBar />
        </header>
        <main className="container">{children}</main>
        <footer className="container">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
