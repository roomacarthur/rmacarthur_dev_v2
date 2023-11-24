import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';
import React from 'react'

export default function ProjectCard({ project }) {
  return (
    <Link href={`projects/${project.id}`}>
      <Card
        className="bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-500"
        isBlurred
        isPressable={true}
        rounded="xl"
      >
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">{project.title}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={project.feature_image}
            width={270}
            isZoomed={true}
          />
        </CardBody>
        <CardFooter>
          <p>
            {project.technologies_used.map((stack, index) => (
              <span
                key={index}
                className="inline-block mr-2 mb-2 px-4 py-1 rounded-full text-xs font-bold bg-teal-400/10 shadow-md cursor-default text-teal-300"
              >
                {stack.name}
              </span>
            ))}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}
