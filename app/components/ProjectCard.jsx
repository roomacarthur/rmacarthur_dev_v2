import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';
import React from 'react'

export default function ProjectCard({ project, technologiesMap }) {
  return (
    <Link href={`projects/${project.id}`} className="shadow-lg w-[250px] h-[400px]">
      {/* Adjust the width and height as needed */}
      <Card
        className="bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-500 h-full w-full"
        isBlurred
        isPressable={true}
        rounded="xl"
      >
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">{project.title}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt={`${project.title} feature image.`}
            className="object-cover rounded-xl"
            src={project.feature_image}
            width={270}
          />
        </CardBody>
        <CardFooter>
          <p>
            {project.technologies_used.map((techId, index) => (
              <span
                key={index}
                className="inline-block mr-2 mb-2 px-4 py-1 rounded-full text-xs font-semibold bg-teal-400/10 shadow-md cursor-default text-teal-300"
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
