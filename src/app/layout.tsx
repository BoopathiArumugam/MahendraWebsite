import localFont from "next/font/local";
import "./globals.css";
import Footer from "./Footer/page";
import Header from "./Header/Header";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: " Mahendra College of Engineering",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>
        <header>
          <Header/>
        </header>
        {children}
        <footer>
        <Footer/>
        </footer>
      </body>
    </html>
  );
}
