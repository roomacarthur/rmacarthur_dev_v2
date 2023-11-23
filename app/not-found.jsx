import Link from "next/link";
import React from "react";

export default function notFound() {
  return (
    <main className="min-h-[80vh] p-4 md:p-12 lg:p-24 w-full mx-auto">
      <div className="h-[60vh] flex flex-col justify-center">
        <h1 className="text-center my-4">😭</h1>
        <h1 className="text-center">There was a slight issue.</h1>
        <p className="text-center my-12">
          We could not find the page you where looking for.{" "}
          <Link
            href="/"
            className="hover:text-cyan-400 underline text-foreground font-semibold transition foregroundBlur"
          >
            Navigate Home.
          </Link>
        </p>
      </div>
    </main>
  );
}
