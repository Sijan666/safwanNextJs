import { Jost, Oswald, Vollkorn } from "next/font/google";
import "./globals.css";
import Navber from "@/layouts/Navber";
import Footer from "@/layouts/Footer";


const jost = Jost({
  variable: "--font-jost",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const vol = Vollkorn({
  variable: "--font-vol",
  weight: ["400", "500", "600", "700" , "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Safwan",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${vol.variable} h-full antialiased`}
    >
      <body className="flex flex-col">
        <Navber/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}