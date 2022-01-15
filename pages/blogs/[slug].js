import Head from "next/head";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "blogs",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "blogs",
    "fields.slug": params.slug,
  });

  return {
    props: {
      blogs: items[0],
      revalidate: 10,
    },
  };
}

export default function BlogDetails({ blogs }) {
  console.log(blogs);

  const { featuredImage, title, content } = blogs.fields;
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="description" content={title} />
      </Head>

      <div className="blog-description">
        <Image
          src={"https:" + featuredImage.fields.file.url}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
          alt={title}
        />
        <h1>{title}</h1>

        <div>{documentToReactComponents(content)}</div>
      </div>
    </div>
  );
}
