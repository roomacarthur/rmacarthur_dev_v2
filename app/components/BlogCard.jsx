import { Card, CardFooter, CardBody, Image } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export default function BlogCard({ blog, categoriesMap }) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear().toString().substr(-2);
    return `${day} ${month} ${year}`;
  }
  return (
    <Link href={`blog/${blog.slug}`} className="w-full h-full">
      <Card
        shadow="md"
        isPressable
        className="bg-gray-800/70 h-full flex flex-col justify-items-start"
      >
        <CardBody id="CardBody" className="p-0 flex flex-col max-h-[200px] w-[600px]">
          <Image
            id="CardImage"
            shadow="sm"
            radius="lg"
            width="100%"
            alt={blog.title}
            className="w-full flex object-cover h-[200px] object-center"
            src={blog.thumbnail}
          />
        </CardBody>
        <CardFooter id="CardFooter" className="p-4 pt-2 flex">
          <div className="mb-2">
            <div className="flex space-x-4 text-[0.6rem] text-muted mb-2">
              <span className="flex items-center">
                <FontAwesomeIcon icon={faCalendarDays} className="mr-1" />
                {formatDate(blog.published_date)}
              </span>
              <span className="flex items-center">
                <FontAwesomeIcon icon={faClock} className="mr-1" />
                {`${blog.read_time} mins`}
              </span>
            </div>
            <h2 className="text-lg tracking-md font-semibold text-left">{blog.title}</h2>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
