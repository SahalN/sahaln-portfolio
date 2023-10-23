/** @format */

import "./globals.css";
import NavBar from "../components/Navbar";
import { inter, mplusrounded1c } from "./fonts";

export default function RootLayout({ children }) {
  return (
    <>
      <html
        lang='en'
        className={`${inter.variable} ${mplusrounded1c.variable}`}>
        <body className='flex flex-col min-h-screen py-3 px-4 sm:px-36 md:px-56 xl:px-[450px] bg-[#F0E7DB]'>
          <header>
            <NavBar />
          </header>
          <main className='px-10 py-3 grow'>{children}</main>
          <footer className='text-sm text-center'>
            &copy; 2023 Muhammad Sahal Nurdin. All Rights Reserved.
          </footer>
        </body>
      </html>
    </>
  );
}
