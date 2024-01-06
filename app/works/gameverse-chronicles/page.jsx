/** @format */

import Heading from "@/components/Heading";
import { marked } from "marked";
import matter from "gray-matter";
import { readFile } from "node:fs/promises";

export default async function GameverseChronicles() {
  const text = await readFile(
    "./content/reviews/gameverse-chronicles.md",
    "utf8"
  );
  const {content, data:{title, date, image}} = matter(text);
  const html = marked(content, { headerIds: false, mangle: false });
  return (
    <>
      <Heading>{title}</Heading>
      <p>{date}</p>
      <img src={image} alt="" width="640px" height="360" />
      <article dangerouslySetInnerHTML={{ __html: html }} className='prose max-w-screen prose-slate' />
    </>
  );
}
