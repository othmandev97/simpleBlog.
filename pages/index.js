import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CardBlog from "../components/BlogCard";
//get login
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "blogs" });

  return {
    props: {
      blogs: res.items,
      revalidate: 10,
    },
  };
}

export default function Home({ blogs }) {
  return (
    // <div className={styles.container}>
    <div className="">
      <Head>
        <title>Simple Blog</title>
        <meta
          name="description"
          content="Simple Blog created with next.js and contentful by othmane el karkoubi"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="blog-list">
        {blogs.map((blog) => (
          <CardBlog key={blog.sys.id} blog={blog} />
        ))}
      </section>
    </div>
  );
}
