import Link from "next/link";
import { format, parseISO } from "date-fns";
import Layout from "../components/Layout";
import { getAllPosts } from "../lib/post-utils";
import { PostType } from "../types";

type HomeProps = {
  posts: PostType[];
};

const Home = ({ posts }: HomeProps): JSX.Element => {
  return (
    <Layout>
      <h1>Bobby Ross Developer</h1>
      <h2>Recent Posts</h2>
      {posts.map((post) => (
        <article key={post.slug} className="mt-12">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {post.publishedDate
              ? format(parseISO(post.publishedDate), "MMMM dd, yyyy")
              : ""}
          </p>
          <h1 className="mb-2 text-xl">
            <Link as={`/blog/${post.slug}`} href={`/blog/[slug]`}>
              <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                {post.title}
              </a>
            </Link>
          </h1>
          <p className="mb-3">{post.description}</p>
          <p>
            <Link as={`/blog/${post.slug}`} href={`/blog/[slug]`}>
              <a>Read More</a>
            </Link>
          </p>
        </article>
      ))}
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts(["publishedDate", "description", "slug", "title"]);
  return {
    props: { posts },
  };
}

export default Home;
