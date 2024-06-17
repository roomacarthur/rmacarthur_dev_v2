import React from "react";
import ProjectCard from "../components/ProjectCard";
import HammerEmoji from "../components/HammerEmoji";

export const metadata = {
  title: "RM | Projects",
};

async function getProjects() {
  const res = await fetch("https://www.roomacarthur.dev/api/projects/");
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

export default async function projectsList() {
  const projects = await getProjects();
  const technologiesMap = await fetchTechnologies();
  return (
    <main className="min-h-screen sm:w-[80%] mx-auto p-4 sm:px-12 pt-4 sm:pt-12">
      <h1 className="font-black mb-8 lg:mb-12 text-foreground text-center">
        PROJECTS <HammerEmoji />
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
      <div className="flex justify-center gap-4 flex-wrap">
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
