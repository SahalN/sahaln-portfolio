/** @format */

import Link from "next/link";

export default function WorksPage() {
  return (
    <>
      <h1>Hello This is works page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
        reprehenderit quis placeat architecto molestiae doloremque soluta
        corrupti labore, dolorem laborum.
      </p>
      <ul>
        <li>
          <Link href='/works/sahalnuiux-blogs'>Sahal's UI/UX Blogs</Link>
        </li>
        <li>
          <Link href='/works/gameverse-chronicles'>Gameverse Chronicles</Link>
        </li>
      </ul>
    </>
  );
}
