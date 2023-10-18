/** @format */

import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <>
      <html lang='en'>
        <body>
          <header>
            <nav>
              <ul>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li>
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
          <main>{children}</main>
          <footer>&copy 2023 Sahal Nurdin | Designed by SahalN</footer>
        </body>
      </html>
    </>
  );
}
