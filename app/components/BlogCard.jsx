import { Card } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import React from "react";
// ... (other imports)

export default function BlogCard({ blog, categoriesMap }) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear().toString().substr(-2);

    return `${day} ${month} ${year}`;
  }

  return (
    <Link href={`blog/${blog.slug}`} className="w-full">
      <Card className="w-full mt-4 text-foreground bg-gray-800/70 p-4 rounded-lg shadow-lg">
        <h2 className="tracking-wide underline">{blog.title}</h2>
        <p className="text-xs font-light text-gray-200 pb-4 mt-2">
          {`Published: ${formatDate(blog.published_date)}`}
        </p>
        <div>
          {blog.categories.map((categoryId, index) => (
            <span
              key={index}
              className="inline-block mr-2 mb-2 px-4 py-1 rounded-full text-xs font-bold bg-teal-400/10 shadow-md cursor-default text-teal-300"
            >
              {categoriesMap[categoryId]}
            </span>
          ))}
        </div>
      </Card>
    </Link>
  );
}
