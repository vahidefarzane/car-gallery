import "./globals.css";

import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

export const metadata = {
  title: "Car Gallery",
  description: "Discover world's best car showcase application",
  icons: [
    {
      url: "/favicon.png",
      href: "favicon.png"
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}