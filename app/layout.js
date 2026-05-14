import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/section/home/Navbar";
import Footer from "@/components/section/home/Footer";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // pick only what you’ll use
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Yellow Glow Studios | Web Design",
  description: "Minimalist, high-speed websites for restaurants and cafes that want more customers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>

      <body className={` ${poppins.variable} ${playfairDisplay.variable}`}>
      <Navbar/>
        {children}
      <Footer/>
      </body>

    </html>
  );
}
