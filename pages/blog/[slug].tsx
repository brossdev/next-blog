import { format, parseISO } from "date-fns";
import fs from "fs";
import matter from "gray-matter";
import mdxPrism from "mdx-prism";
import { GetStaticPaths, GetStaticProps } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import path from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import Layout, { WEBSITE_HOST_URL } from "../../components/Layout";
import { MetaProps, PostType } from "../../types";
import { postFilePaths, POSTS_PATH } from "../../lib/post-utils";

const components = {
  Head,
  Image,
  Link,
};

type BlogPostProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: PostType;
};

const BlogPost = ({ source, frontMatter }: BlogPostProps) => {
  const customMeta: MetaProps = {
    title: frontMatter.title,
    description: frontMatter.description,
    image: `${WEBSITE_HOST_URL}${frontMatter.image}`,
    publishedDate: frontMatter.publishedDate,
    // TS this type below
    type: "article",
  };
  return (
    <Layout customMeta={customMeta}>
      <article>
        <h1 className="mb-3 text-gray-900 dark:text-white">
          {frontMatter.title}
        </h1>
        <p className="mb-10 text-sm text-gray-500 dark:text-gray-400">
          {frontMatter.publishedDate
            ? format(parseISO(frontMatter.publishedDate), "MMMM dd, yyyy")
            : ""}
        </p>
        <div className="prose dark:prose-dark">
          <MDXRemote {...source} components={components} />
        </div>
      </article>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [require("remark-code-titles")],
      rehypePlugins: [mdxPrism, rehypeSlug, rehypeAutolinkHeadings],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default BlogPost;
