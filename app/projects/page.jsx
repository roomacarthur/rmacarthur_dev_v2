import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function projectsList() {
  const projects = [
    { id: 1, title: "Blog", stack: ["HTML", "CSS"], img: "" },
    { id: 2, title: "Test1", stack: ["React", "JS"], img: "" },
    { id: 3, title: "Test2", stack: ["React", "JS"], img: "" },
    { id: 4, title: "Test3", stack: ["React", "JS"], img: "" },
    { id: 5, title: "Test4", stack: ["React", "JS"], img: "" },
    { id: 6, title: "Test5", stack: ["React", "JS"], img: "" },
    { id: 7, title: "Test6", stack: ["React", "JS"], img: "" },
  ];
  return (
    <main className="min-h-screen p-4 pt-12 sm:p-12 w-[80%] mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 lg:mb-12 text-foreground text-center">
        Projects 🛠️
      </h1>
      <p className="mb-8 text-center">
        Dive into my portfolio, where each project narrates a story of
        challenges, learning, and triumphs. From advocating ocean sustainability
        in SEASTAINABILITY to engineering a dynamic Forum for HiFi and Music
        lovers in The WAM, my work reflects a journey of continuous growth and
        exploration.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </main>
  );
}
