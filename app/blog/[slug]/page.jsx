import { Image } from "@nextui-org/image";
import React from "react";
import { Link, User } from "@nextui-org/react";
import { remark } from "remark";
import html from "remark-html";

async function getBlog(slug) {
  const res = await fetch(`https://www.roomacarthur.dev/api/blogs/${slug}`);
  return res.json();
}

async function getCategories() {
  const res = await fetch("https://www.roomacarthur.dev/api/blog_categories/");
  return res.json();
}

export default async function blogDetail({ params }) {
  const blog = await getBlog(params.slug);
  const categories = await getCategories();

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear().toString().substr(-2);

    return `${day} ${month} ${year}`;
  }

  return (
    <div className="min-h-screen p-4 md:p-12 lg:p-24 mx-auto flex flex-col md:flex-row">
      {/* Main Content */}
      <article className="flex-1 mb-12">
        <h1 className="test-black mb-8">{blog.title}</h1>
        {blog.thumbnail ? (
          <Image
            src={blog.thumbnail}
            isBlurred={true}
            className="h-[300px] mx-auto object-cover mb-8"
            alt={`${blog.title} by RooMacArthur.dev.`}
          />
        ) : (
          ""
        )}

        {/* Links and Technologies for small screens */}
        <div className="block md:hidden my-4">
          <User
            name="Ruairidh MacArthur"
            description={`Published: ${formatDate(blog.published_date)}`}
            avatarProps={{
              src: "/roo.jpg",
            }}
          >
            Roo
          </User>
        </div>

        {/* Rest of the main content */}
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </article>

      {/* Sidebar for medium and larger screens */}
      <aside className="sticky top-[100px] hidden md:block self-start w-[300px] h-fit ml-8 bg-gray-800/70 p-4 rounded-lg shadow-lg">
        <User
          name="Ruairidh MacArthur"
          description={`Published: ${formatDate(blog.published_date)}`}
          avatarProps={{
            src: "/roo.jpg",
          }}
        >
          Roo
        </User>
        <p className="font-light text-sm mt-2">
          I write a little about what interests me in the world of development.
        </p>
        <h2 className="mb-2 mt-4">Categories</h2>
        {categories.map((category) => (
          <Link href={`blog/catagories/${category.slug}`} key={category.id}>
            <span className="inline-block mr-2 mb-2 px-4 py-1 rounded-full text-xs font-bold bg-teal-400/10 shadow-md cursor-pointer text-teal-300">
              {category.name}
            </span>
          </Link>
        ))}
        <h2 className="mt-4 mb-2">Latest Articles</h2>
        {/* the 3 latest blog posts  */}
        <h2 className="mt-4 mb-2">Share</h2>
        {/* links to share the url  */}
      </aside>
    </div>
  );
}
