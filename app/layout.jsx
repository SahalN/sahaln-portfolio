/** @format */

import "./globals.css";
import NavBar from "../components/Navbar";

export default function RootLayout({ children }) {
  return (
    <>
      <html lang='en'>
        <body className='flex flex-col min-h-screen py-3 md:px-72 bg-[#F0E7DB]'>
          <header>
            <NavBar />
          </header>
          <main className='px-10 py-3 grow'>{children}</main>
          <footer className='text-center'>
            &copy 2023 Sahal Nurdin | Designed by{" "}
            <a href='' className='hover:underline'>
              SahalN
            </a>
          </footer>
        </body>
      </html>
    </>
  );
}
