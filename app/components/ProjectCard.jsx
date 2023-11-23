import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';
import React from 'react'

export default function ProjectCard({ project }) {
  return (
    <Link
      href="/"
    >
      <Card
        className="bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-500"
        isBlurred
        isPressable={true}
      >
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">{project.title}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src=""
            width={270}
          />
        </CardBody>
        <CardFooter>
          {project.stack.map((stack, index) => (
            <span
              key={index}
              className="inline-block mr-2 mb-2 px-4 py-1 rounded-full text-xs font-bold bg-foreground/30 shadow-md cursor-default"
            >
              {stack}
            </span>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
}
