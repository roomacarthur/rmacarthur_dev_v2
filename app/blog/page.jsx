"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";

async function fetchBlogs() {
  try {
    const res = await fetch("https://www.roomacarthur.dev/api/blogs/");
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return []; // Return an empty array or handle as needed
  }
}

async function fetchCategories() {
  try {
    const res = await fetch(
      "https://www.roomacarthur.dev/api/blog_categories/"
    );
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const categories = await res.json();
    return categories.reduce((map, category) => {
      map[category.id] = category.name;
      return map;
    }, {});
  } catch (error) {
    console.error("Error fetching categories:", error);
    return {}; // Return an empty object or handle as needed
  }
}

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    async function fetchData() {
      const fetchedBlogs = await fetchBlogs();
      // Sort the blogs by published_date in descending order
      const sortedBlogs = fetchedBlogs.sort(
        (a, b) => new Date(b.published_date) - new Date(a.published_date)
      );
      setBlogs(sortedBlogs);

      const fetchedCategories = await fetchCategories();
      setCategoriesMap(fetchedCategories);
    }

    fetchData();
  }, []);

  return (
    <main className="min-h-screen sm:w-[80%] mx-auto p-4 sm:px-12 pt-4 sm:pt-12">
      <h1 className="mb-12 text-5xl font-black text-foreground text-center">
        Blog📝
      </h1>
      <div>
        <div className="flex justify-center">
          <p className="mb-8 text-center w-[80%] flex justify-center">
            Welcome to my blog – a place where I document my thoughts on
            full-stack development, share insights from my projects, and
            sometimes, just muse about the latest in web technologies. Whether
            you are a fellow developer, a curious learner, or somewhere in
            between, there is a story here for you.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} categoriesMap={categoriesMap} />
          ))}
        </div>
      </div>
    </main>
  );
}
