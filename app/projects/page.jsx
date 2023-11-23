import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function projectsList() {
  const projects = [
    { title: "Blog", stack: ["HTML", "CSS"], img: "" },
    { title: "Test1", stack: ["React", "JS"], img: "" },
    { title: "Test2", stack: ["React", "JS"], img: "" },
    { title: "Test3", stack: ["React", "JS"], img: "" },
    { title: "Test4", stack: ["React", "JS"], img: "" },
    { title: "Test5", stack: ["React", "JS"], img: "" },
    { title: "Test6", stack: ["React", "JS"], img: "" },
  ];
  return (
    <main className="min-h-screen p-4 md:p-12 lg:p-24 w-full mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 lg:mb-12 text-foreground text-center">
        Projects 🛠️
      </h1>
      <h3 className="mb-8 text-center">
        Things I've worked on, built or created.
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </main>
  );
}
