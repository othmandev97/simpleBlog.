import Link from "next/link";
import Image from "next/image";

export default function CardBlog({ blog }) {
  const { title, slug, thumbnail } = blog.fields;
  return (
    <div className="card__blog">
      <div className="card__blog--image">
        {/* <img src="/pexels-photo-1631677.jpeg" alt="" /> */}
        <Image
          src={"https:" + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
          alt={title}
        />
      </div>
      <div className="card__blog--content">
        <Link href={`/blogs/${slug}`}>
          <h1>
            <a href="#">{title}</a>
          </h1>
        </Link>

        <Link href={`/blogs/${slug}`}>
          <button className="card__blog--button buttonContact">
            view more
          </button>
        </Link>
      </div>
    </div>
  );
}
