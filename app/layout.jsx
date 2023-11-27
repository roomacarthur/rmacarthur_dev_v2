import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ClientSideGradient from "./components/ClientSideGradient"

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "RM | Full Stack Developer",
  description:
    "Explore Ruairidh MacArthur's portfolio showcasing a variety of full-stack development projects and insightful blog posts on technology and development.",
  keywords:
    "full stack developer, portfolio, projects, blog, technology, development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* background gradient effect */}
        <ClientSideGradient />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
