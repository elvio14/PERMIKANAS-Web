import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
//import NotFound from "./not-found";
import { Analytics } from "@vercel/analytics"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Permika Nasional",
  description: "The official website of Permika Nasional. Persatuan Mahasiswa Indonesia di Kanada Nasional",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Manrope:wght@200..800&display=swap" rel="stylesheet"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer></Footer>
        {/* <NotFound/>  */}
        <Analytics/>
      </body>
    </html>
  )
}
