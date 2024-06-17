import { Card } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import React from "react";

export default function BlogCard({ blog, categoriesMap }) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear().toString().substr(-2);

    return `${day} ${month} ${year}`;
  }

  return (
    <Link href={`blog/${blog.slug}`} className="w-full h-full">
      <Card className="w-full h-full text-foreground bg-gray-800/70 p-4 rounded-lg shadow-lg flex flex-col">
        <h2 className="tracking-wide underline">{blog.title}</h2>
        <p className="text-xs font-light text-gray-200 pb-4 mt-2">
          {`Published: ${formatDate(blog.published_date)}`}
        </p>
        <div className="mt-auto">
          {blog.categories.map((categoryId, index) => (
            <span
              key={index}
              className="text-[0.5rem] leading-[0.75rem] tracking-wide me-2 px-1.5 py-0.5 rounded-sm bg-teal-100/10 shadow-md cursor-pointer text-foreground hover:text-teal-300"
            >
              {categoriesMap[categoryId]}
            </span>
          ))}
        </div>
      </Card>
    </Link>
  );
}
