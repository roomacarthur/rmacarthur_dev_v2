import { Image } from "@nextui-org/image";
import React from "react";
import { Link, User } from "@nextui-org/react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ShareButtons from "@/app/components/ShareButtons";


async function getBlog(slug) {
  const res = await fetch(`https://www.roomacarthur.dev/api/blogs/${slug}`, {
    cache: "no-store",
  });
  const data = await res.json();
  console.log("Fetched blog data:", data); // Log the response to inspect its structure
  return data;
}

async function getCategories() {
  const res = await fetch("https://www.roomacarthur.dev/api/blog_categories/");
  const data = await res.json();
  console.log("Fetched categories data:", data); // Log the response to inspect its structure
  return data;
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

  const shareUrl = `https://www.roomacarthur.dev/blog/${blog.slug}`;
  const title = blog.title;

  return (
    <div className="min-h-screen p-4 pt-20 sm:py-12 mx-auto max-w-screen-xl">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Main Content */}
        <article className="flex-1 mb-12 max-w-[95%] md:max-w-[80%] mx-auto">
          <h1 className="text-foreground mb-8 text-2xl md:text-4xl font-bold px-[20px] mx-auto max-w-[800px]">
            {blog.title}
          </h1>
          <div className="flex justify-center mb-8">
            <Image
              src={blog.thumbnail}
              isBlurred={true}
              className="w-full h-auto object-cover rounded-lg shadow-lg max-w-2xl"
              alt={`${blog.title} by RooMacArthur.dev.`}
            />
          </div>

          {/* Links and Technologies for small screens */}
          <div className="flex-1 col px-[20px] xl:hidden my-4 no-css-inherit">
            <User
              name="Ruairidh MacArthur"
              description={`${formatDate(blog.published_date)} // ${
                blog.views_count
              } views // ${blog.read_time} min read`}
              avatarProps={{
                src: "/roo.jpg",
                radius: "full",
              }}
            >
              Roo
            </User>
            <div className="flex flex-wrap my-2">
              {categories.map((category) => (
                <Link
                  href={`blog/categories/${category.slug}`}
                  key={category.id}
                >
                  <span className="text-[0.5rem] leading-[0.75rem] tracking-wide me-2 px-1.5 py-0.5 rounded-sm bg-teal-100/10 shadow-md cursor-pointer text-foreground hover:text-teal-300">
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
            <ShareButtons shareUrl={shareUrl} title={title} />
          </div>

          {/* Rest of the main content */}
          <section className="blogContent max-w-fit">
            <ReactMarkdown
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={dracula}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code
                      className={inline ? "inline-code" : className}
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </section>
          <hr className="mt-8 w-[70%] mx-auto"></hr>
        </article>

        {/* Sidebar for large screens */}
        <aside className="sticky top-24 z-10 lg:top-24 lg:self-start w-full lg:max-w-[300px] h-fit mt-8 lg:mt-0 bg-gray-800/70 p-4 rounded-lg shadow-lg hidden xl:block">
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
            I write a little about what interests me in the world of
            development.
          </p>
          <h2 className="mb-2 mt-4 font-bold text-lg">Categories</h2>
          <div className="flex flex-wrap">
            {categories.map((category) => (
              <Link href={`blog/categories/${category.slug}`} key={category.id}>
                <span className="text-[0.5rem] leading-[0.75rem] tracking-wide me-2 mb-1 px-1.5 py-0.5 rounded-sm bg-teal-100/10 shadow-md cursor-pointer text-foreground hover:text-teal-300">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
          {/* <h2 className="mt-4 mb-2 font-bold text-lg">Latest Articles</h2> */}
          {/* Add links to the latest articles here */}
          <h2 className="mt-4 mb-2 font-bold text-lg">Share</h2>
          <ShareButtons shareUrl={shareUrl} title={title} />
        </aside>
      </div>
    </div>
  );
}
