import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import React from "react";

async function getProject(id) {
  const res = await fetch(`https://www.roomacarthur.dev/api/projects/${id}`);
  return res.json();
}

async function fetchTechnologies() {
  const response = await fetch(
    "https://www.roomacarthur.dev/api/technologies/"
  );
  const technologies = await response.json();
  return technologies.reduce((map, tech) => {
    map[tech.id] = tech.name;
    return map;
  }, {});
}

export default async function projectDetail({ params }) {
  const project = await getProject(params.id);
  const technologiesMap = await fetchTechnologies();

  return (
    <div className="min-h-screen p-4 md:p-12 lg:p-24 mx-auto flex flex-col md:flex-row">
      {/* Main Content */}
      <main className="flex-1">
        <h1 className="text-2xl">{project.title}</h1>
        <Image
          src={project.feature_image}
          className="h-[300px] mx-auto object-cover"
          alt={`${project.title} Feature Image.`}
        ></Image>

        {/* Links and Technologies for small screens */}
        <div className="block md:hidden my-4">
          {/* Links */}
          <div>
            <h3 className="font-bold mt-4">Live Links</h3>
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
            ) : (
              <p>No Live Site.</p>
            )}
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-bold mt-4">Technologies Used</h3>
            {project.technologies_used.map((techId, index) => (
              <span
                key={index}
                className="inline-block mr-2 mb-2 px-4 py-1 rounded-full text-xs font-bold bg-teal-400/10 shadow-md cursor-default text-teal-300"
              >
                {technologiesMap[techId]}
              </span>
            ))}
          </div>
        </div>

        {/* Rest of the main content */}
        <h2>Project Intro</h2>
        <p>{project.intro}</p>
        <h2>Project Brief</h2>
        <p>{project.the_brief}</p>
      </main>

      {/* Sidebar for medium and larger screens */}
      <aside className="sticky top-16 hidden md:block self-start w-[300px] h-fit ml-8 bg-white p-4 rounded-lg shadow-lg">
        {/* Sidebar content */}
        <h3 className="font-bold text-lg mb-2">About the Project</h3>
        <p>{/* Your snippet about the project */}</p>

        <h3 className="font-bold text-lg mb-2">Live Links</h3>
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
        ) : (
          <p>No Live Site.</p>
        )}

        <h3 className="font-bold text-lg mb-2">Technologies Used</h3>
        {project.technologies_used.map((techId, index) => (
          <span
            key={index}
            className="inline-block mr-2 mb-2 px-4 py-1 rounded-full text-xs font-bold bg-teal-400/10 shadow-md cursor-default text-teal-300"
          >
            {technologiesMap[techId]}
          </span>
        ))}
      </aside>
    </div>
  );
}
