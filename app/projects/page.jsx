import React from "react";
import ProjectCard from "../components/ProjectCard";
import HammerEmoji from "../components/HammerEmoji";

export const metadata = {
  title: "RM | Projects",
};

async function getProjects() {
  const res = await fetch(
    "https://roomacarthur-a1177a72bce2.herokuapp.com/api/projects/"
  );
  return res.json();
}

async function fetchTechnologies() {
  const response = await fetch(
    "https://roomacarthur-a1177a72bce2.herokuapp.com/api/technologies/"
  );
  const technologies = await response.json();
  return technologies.reduce((map, tech) => {
    map[tech.id] = tech.name;
    return map;
  }, {});
}

export default async function projectsList() {
  const projects = await getProjects();
  const technologiesMap = await fetchTechnologies();
  return (
    <main className="min-h-screen sm:w-[90%] lg:w-[80%] mx-auto p-4 lg:px-12 pt-4 lg:pt-12">
      <h1 className="mb-12 text-5xl font-black text-foreground text-center">
        Projects <HammerEmoji />
      </h1>
      <div className="flex justify-center">
        <p className="mb-8 text-center w-[80%] flex justify-center">
          {`Dive into my portfolio, where each project narrates a story of
        challenges, learning, and triumphs. From advocating ocean sustainability
        in SEASTAINABILITY to engineering a dynamic Forum for HiFi and Music
        lovers in The WAM, my work reflects a journey of continuous growth and
        exploration.`}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4">
        {projects.map((project, index) => (
          <ProjectCard
            project={project}
            key={index}
            technologiesMap={technologiesMap}
          />
        ))}
      </div>
    </main>
  );
}
