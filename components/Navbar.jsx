/** @format */

import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav>
        <ul className='flex gap-2 mt-3'>
          <li>
            <Link href='/' className='hover:underline font-mplusrounded1c'>
              Sahal Nurdin
            </Link>
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
    </>
  );
}
