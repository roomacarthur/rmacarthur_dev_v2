import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';
import React from 'react'

export default function ProjectCard({ project, technologiesMap }) {
  return (
    <Link
      href={`projects/${project.id}`}
      className="shadow-lg w-[350px] h-[350px] flex items-center justify-center"
    >
      {/* Adjust the width and height as needed */}
      <Card
        className="bg-gray-800/70 rounded-md border border-gray-500 h-full w-full"
        isPressable={true}
        rounded="xl"
      >
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">{project.title}</h4>
        </CardHeader>
        <CardBody className="flex items-center justify-center py-2">
          <Image
            alt={`${project.title} feature image.`}
            className="object-cover rounded-md max-w-[300px]"
            src={project.feature_image}
            
          />
        </CardBody>
        <CardFooter>
          <p>
            {project.technologies_used.map((techId, index) => (
              <span
                key={index}
                className="inline-block mr-2 mb-2 px-4 py-1 rounded-full text-xs font-semibold bg-teal-400/10 shadow-md cursor-pointer text-teal-300"
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
