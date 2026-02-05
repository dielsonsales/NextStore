import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer/footer";

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
    <html lang="en">
      <body>
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
