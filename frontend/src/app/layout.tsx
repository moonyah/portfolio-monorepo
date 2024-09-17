import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Portfolio - JangMunYong",
  description: "Showcasing my projects, resume, and other activities.",
  keywords: "portfolio, developer, projects, resume, activities",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
