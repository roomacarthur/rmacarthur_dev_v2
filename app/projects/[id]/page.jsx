import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import React from "react";

async function getProject(id) {
  const res = await fetch(`https://www.roomacarthur.dev/api/projects/${id}`);
  return res.json();
}

export default async function projectDetail({ params }) {
  const project = await getProject(params.id);
  return (
    <main className="min-h-screen p-4 md:p-12 lg:p-24 w-full mx-auto">
      <h1>{project.title}</h1>
      <Image
        src={project.feature_image}
        className="h-[300px] mx-auto object-cover"
      ></Image>
      <h2>Live Links</h2>
      {project.github_link ? (
        <Link href={project.github_link} target="_blank">
          Git Repo
        </Link>
      ) : (
        <p>Repo is Private.</p>
      )}
      {project.website_link ? (
      <Link href={project.website_link} target="_blank">
        Live Site
      </Link>
      ) : (<p>No Live Site.</p>
      )}
      <h2>Project Intro</h2>
      <p>{project.intro}</p>
      <h2>Project Brief</h2>
      <p>{project.the_brief}</p>
    </main>
  );
}
