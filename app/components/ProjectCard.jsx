import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import React from "react";

export default function ProjectCard({ project, technologiesMap }) {
  return (
    <Link href={`projects/${project.id}`} className="w-full h-full">
      <Card
        className="bg-gray-800/70 h-[200px] w-full hover-border-effect"
        isPressable
      >
        <CardHeader className="p-2">
          <h3 className="font-bold text-2xl">{project.title}</h3>
        </CardHeader>
        <CardBody>
          <p className="text-sm tracking-wide text-balance line-clamp-3 overflow-hidden">{project.intro}</p>
        </CardBody>
        <CardFooter>
          <p className="flex flex-wrap">
            {project.technologies_used.map((techId, index) => (
              <span
                key={index}
                className="text-xs tracking-wide me-2 mb-1 px-1.5 py-0.5 rounded-sm bg-teal-100/10 shadow-md cursor-pointer text-foreground hover:text-teal-300"
              >
                {technologiesMap[techId]}
              </span>
            ))}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}
