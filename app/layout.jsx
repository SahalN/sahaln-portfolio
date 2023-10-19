/** @format */

import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <>
      <html lang='en'>
        <body className='flex flex-col min-h-screen px-40 py-3'>
          <header>
            <nav>
              <ul className='flex gap-2'>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li className='ml-auto'>
                  <Link href='/works'>Works</Link>
                </li>
                <li>
                  <Link href='/blogs' prefetch={false}>
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href='/github'>Github</Link>
                </li>
              </ul>
            </nav>
          </header>
          <main className='px-10 py-3 grow'>{children}</main>
          <footer className='text-center'>
            &copy 2023 Sahal Nurdin | Designed by SahalN
          </footer>
        </body>
      </html>
    </>
  );
}
