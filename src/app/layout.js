
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navber/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkillSphere | Learn Skills Online in Bangladesh",
  description:
    "SkillSphere is a modern online learning platform in Bangladesh. Explore top courses in development, design, and AI to upgrade your skills.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <NavBar></NavBar>
        <main>{children}</main>
        <Footer></Footer>

      </body>
    </html>
  );
}
