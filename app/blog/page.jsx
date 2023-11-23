import { Pagination } from '@nextui-org/pagination';
import React from 'react'
import PagePagination from '../components/PagePagination';
import BlogCard from '../components/BlogCard';

export default function blogList() {
  return (
    <main className="min-h-[80vh] p-4 pt-12 sm:p-12 w-[80%] mx-auto">
      <h1 className="mb-12 text-5xl font-black text-foreground text-center">
        Blog📝
      </h1>
      <div>
        <div>
          <h2>Welcome to my written work.</h2>
          <p className="font-light">
            Welcome to my blog – a place where I document my thoughts on
            full-stack development, share insights from my projects, and
            sometimes, just muse about the latest in web technologies. Whether
            you're a fellow developer, a curious learner, or somewhere in
            between, there's a story here for you.
          </p>
        </div>
        <div>
          {/* blog posts */}
          <BlogCard />
        </div>
        <div>{/* Search bar */}</div>
        <div>{/* side bar*/}</div>

        <div>
          <PagePagination />
        </div>
      </div>
    </main>
  );
}
