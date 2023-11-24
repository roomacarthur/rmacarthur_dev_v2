import { Pagination } from "@nextui-org/pagination";
import React from "react";
import PagePagination from "../components/PagePagination";
import BlogCard from "../components/BlogCard";
import { Input } from "@nextui-org/input";

export default function blogList() {
  // test data.
  const blogs = [
    {
      title: "Hello World",
      snippet:
        "this is just a small bit of text to represent a small amount of words to be displayed. this is just a small bit of text to represent a small amount of words to be displayed.",
      date: "10/06/2023",
      viewCount: "666",
      readTime: "2",
      slug: "hello_world",
      tags: ["HTML", "CSS", "JS"],
    },
    {
      title:
        "Automate Your File Management: How to Organize Your Downloads Folder with Python",
      snippet:
        "this is just a small bit of text to represent a small amount of words to be displayed.",
      date: "10/11/2023",
      viewCount: "350",
      readTime: "7",
      slug: "test_blog",
      tags: ["React", "CSS", "JS"],
    },
    {
      title: "test Blog2.",
      snippet:
        "this is just a small bit of text to represent a small amount of words to be displayed.",
      date: "17/11/2023",
      viewCount: "30k",
      readTime: "5",
      slug: "test_blog2",
      tags: ["Django Rest Framework", "Python", "CSS", "JS"],
    },
    {
      title: "test Blog3.",
      snippet:
        "this is just a small bit of text to represent a small amount of words to be displayed.",
      date: "12/01/2021",
      viewCount: "35",
      readTime: "12",
      slug: "test_blog3",
      tags: ["HTML", "CSS", "JS"],
    },
  ];
  // Compile all tags and removing duplicates
  const allTags = [...new Set(blogs.flatMap((blog) => blog.tags))];
  return (
    <main className="min-h-[80vh] p-4 pt-12 sm:p-12 w-[80%] mx-auto">
      <h1 className="mb-12 text-5xl font-black text-foreground text-center">
        Blog📝
      </h1>
      <div>
        <div className="sm:pl-4 pl-0 mb-4">
          <h2>Welcome to my written work.</h2>
          <p className="font-light">
            Welcome to my blog – a place where I document my thoughts on
            full-stack development, share insights from my projects, and
            sometimes, just muse about the latest in web technologies. Whether
            you're a fellow developer, a curious learner, or somewhere in
            between, there's a story here for you.
          </p>
        </div>
        {/* Page Section*/}
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-2/3 sm:pr-4">
            {/* blog posts */}
            {blogs.map((blog, index) => (
              <BlogCard blog={blog} key={index} />
            ))}
            <PagePagination />
          </div>
          {/* Side bar  */}
          <div className="sm:w-1/3 mt-8 mb-8 sm:mb-0 sm:mt-4 border-0 rounded-xl bg-foreground/10 backdrop-blur p-4 border-t shadow-lg border-foreground/60">
            <div>{/* Search bar */}
            <h2 className="mb-4">Search</h2>
            <Input>Search</Input>
            </div>
            <div>
              {/* Categories.*/}
              <h2 className="mb-4 mt-4">Categories</h2>
              {/* loop through categories, duplicates are already removed. */}
              {allTags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block mr-2 mb-2 px-4 py-1 rounded-full text-xs font-bold bg-teal-400/10 shadow-md cursor-default text-teal-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
