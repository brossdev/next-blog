import Layout from "../../components/Layout";
import { getAllPosts } from "../../lib/post-utils";
import { PostType } from "../../types";

type BlogProps = {
  posts: PostType[];
};

export function Blog({ posts }: BlogProps) {
  return (
    <Layout>
      <h1>Developer Blog Posts</h1>
      <p>Developer related blog posts</p>
      {posts.map((post) => (
        <article key={post.slug} className="mt-12">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {post.title}
          </p>
        </article>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts([
    "publishedDate",
    "description",
    "slug",
    "title",
  ]);
  console.log({ posts });
  return {
    props: { posts },
  };
}

export default Blog;
