import type { Metadata } from "next";
import { Jost, Nunito_Sans } from "next/font/google";
import "../../public/styles/globals.css";
import Header from '../components/Header';

const jost = Jost({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400","500","600","700"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"] // fallback stack
});

const nunitoSans = Nunito_Sans({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["400","500","600","700"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"]
});

export const metadata: Metadata = {
  title: "Kmini Technologies",
  description: "Modern tech solutions company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} ${nunitoSans.variable} antialiased`}
      >
        <Header />
        <div className="bg-white text-black">
          {children}
        </div>
      </body>
    </html>
  );
}
