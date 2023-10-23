/** @format */

import Heading from "@/components/Heading";
import { marked } from "marked";
import { readFile } from "node:fs/promises";

export default async function GameverseChronicles() {
  const text = await readFile(
    "./content/reviews/gameverse-chronicles.md",
    "utf8"
  );
  const html = marked(text, { hederIds: false, mangle: false });
  return (
    <>
      <Heading>Gameverse Chronicles</Heading>
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
