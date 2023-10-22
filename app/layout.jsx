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
        <body className='flex flex-col min-h-screen py-3 md:px-72 bg-[#F0E7DB]'>
          <header>
            <NavBar />
          </header>
          <main className='px-10 py-3 grow'>{children}</main>
          <footer className='text-center'>
            &copy 2023 Muhammad Sahal Nurdin. All Rights Reserved.
          </footer>
        </body>
      </html>
    </>
  );
}
