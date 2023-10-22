/** @format */

import Heading from "@/components/Heading";
import Link from "next/link";

export default function WorksPage() {
  return (
    <>
      <Heading>Hello This is works page</Heading>
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
