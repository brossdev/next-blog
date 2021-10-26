import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const POSTS_PATH = path.join(process.cwd(), "posts");

export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path));

type PostItems = {
  [key: string]: string;
};

export function getAllPostSlugs(): string[] {
  return fs.readdirSync(POSTS_PATH);
}

export function getPostBySlug(slug: string, fields: string[]): PostItems {
  const actualSlug = slug.replace(/\.mdx$/, "");
  const slugPath = path.join(POSTS_PATH, `${actualSlug}.mdx`);
  const fileContents = fs.readFileSync(slugPath, "utf-8");
  const { data, content } = matter(fileContents);

  const items: PostItems = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = actualSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []): PostItems[] {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
