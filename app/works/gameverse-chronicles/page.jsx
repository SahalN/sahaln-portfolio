/** @format */

import Heading from "@/components/Heading";
import { readFile } from "node:fs/promises";

export default async function GameverseChronicles() {
  const text = await readFile(
    "./content/reviews/gameverse-chronicles.md",
    "utf8"
  );
  return (
    <>
      <Heading>Gameverse Chronicles</Heading>
      {text}
    </>
  );
}
