import React from "react";
import matter from "gray-matter";
import path from "path";
import fs from "fs";
//import { Post } from '../../types'

const Blog = ({ posts }) => {
  return (
    <div>
      <header>Placeholder Header</header>
      <main>
        <div>
          {posts.map((post) => (
            <div key={post.title}>
              <div>{post.title}</div>
              <div>{post.summary}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

Blog.defaultProps = {
  posts: [],
};

const root = process.cwd();

//async function getFiles(dataType: string) {
//    return fs.readdirSync(path.join(root, 'posts', dataType), 'utf-8')
//}
//
//
//async function getPostBySlug(dataType: string, slug: string) {
//    const source = fs.readFileSync(path.join(root, 'posts', dataType, `${slug}.mdx`), 'utf-8')
//    const { data, content } = matter(source)
//
//    return {
//        frontMatter: data,
//        markdownBody: content,
//    }
//}

async function getAllPostsWithFrontMatter(dataType: string) {
  const files = fs.readdirSync(path.join(root, dataType));

  return files.map((postSlug) => {
    const source = fs.readFileSync(
      path.join(root, dataType, postSlug),
      "utf-8"
    );

    const { data } = matter(source);

    return data;
  });
}

export async function getStaticProps() {
  const posts = await getAllPostsWithFrontMatter("posts");
  console.log({ posts });
  return {
    props: { posts },
  };
}

export default Blog;
