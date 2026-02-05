import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

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
          <nav>
            <Link href="/products">Store</Link>
            <Link href="/profile">Profile</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2026 NextStore</footer>
      </body>
    </html>
  );
}
