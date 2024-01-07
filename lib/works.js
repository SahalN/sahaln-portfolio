/** @format */
import { marked } from "marked";
import matter from "gray-matter";
import { readFile } from "node:fs/promises";

export async function getWork(slug) {
  const text = await readFile("./content/reviews/{slug}.md", "utf8");
  const {
    content,
    data: { title, date, image },
  } = matter(text);
  const html = marked(content, { headerIds: false, mangle: false });
  return { title, data, image, body };
}
