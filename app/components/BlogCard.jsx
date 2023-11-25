import { Card } from '@nextui-org/card';
import { Link } from '@nextui-org/link';
import React from 'react';

export default function BlogCard({ blog }) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear().toString().substr(-2);

    return `${day} ${month} ${year}`;
  }
  return (
    <Link href={`blog/${blog.slug}`} className="w-full">
      <div className="bg-gray-800/80 w-full mt-4 text-foreground hover:bg-foreground/10 p-4 hover:shadow-lg hover:backdrop-blur-lg rounded-lg hover:border-t border-foreground/60 border-t shadow-lg border-foreground/20">
        <h2 className="tracking-wide underline">{blog.title}</h2>
        <p className="text-left py-4">{`${blog.snippet}`}</p>
        <p className="text-xs font-light text-gray-200 pb-4">
          {`
          Published: ${formatDate(blog.published_date)} | min Read`}
        </p>
        <div>
          {blog.categories.map((category) => (
            <span
              key={category.id}
              className="inline-block mr-2 mb-2 px-4 py-1 rounded-full text-xs font-bold bg-teal-400/10 shadow-md cursor-default text-teal-300"
            >
              {category.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
