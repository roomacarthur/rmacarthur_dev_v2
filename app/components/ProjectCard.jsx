import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import React from "react";

export default function ProjectCard({ project, technologiesMap }) {
  return (
    <Link
      href={`projects/${project.id}`}
      className="shadow-lg w-[350px] h-[350px] flex items-center justify-center"
    >
      {/* Adjust the width and height as needed */}
      <Card
        className="bg-gray-800/70 h-full w-full"
        isPressable
      >
        <CardHeader className="pb-0 px-4 flex-col items-center justify-center">
          <Image
            alt={`${project.title} feature image.`}
            className="object-contain rounded-md"
            src={project.feature_image}
          />
        </CardHeader>
        <CardBody className="flex items-center justify-center py-2">
          <h3 className="font-bold text-2xl">{project.title}</h3>
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
