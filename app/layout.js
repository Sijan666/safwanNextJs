import { Jost, Oswald } from "next/font/google";
import "./globals.css";
import Navber from "@/layouts/Navber";


const jost = Jost({
  variable: "--font-jost",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const Ows = Oswald({
  variable: "--font-ows",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Safwan",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${Ows.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navber/>
        {children}
      </body>
    </html>
  );
}