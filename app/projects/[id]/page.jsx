import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { User } from "@nextui-org/react";
import React from "react";

export const metadata = {
  description: "Personal software Project by roomacarthur.dev",
};

async function getProject(id) {
  const res = await fetch(`https://www.roomacarthur.dev/api/projects/${id}`);
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

async function fetchImages() {
  const response = await fetch(
    "https://www.roomacarthur.dev/api/portfolio_images/"
  );
  return await response.json();
}

export default async function projectDetail({ params }) {
  const project = await getProject(params.id);
  const technologiesMap = await fetchTechnologies();
  const allImages = await fetchImages();

  // Filter images based on the project's image IDs
  const websiteImages = project.website_images.map((id) =>
    allImages.find((img) => img.id === id)
  );
  const mobileDesignImages = project.mobile_design_images.map((id) =>
    allImages.find((img) => img.id === id)
  );

  return (
    <div className="min-h-screen p-4 md:p-12 lg:p-24 mx-auto flex flex-col md:flex-row">
      {/* Main Content */}
      <main className="flex-1 mb-12">
        <h1 className="mb-4 md:text-5xl sm:text-4xl text-3xl font-bold">
          {project.title}
        </h1>
        <Image
          src={project.feature_image}
          className="lg:max-h-[400px] max-w-full rounded-md mx-auto object-cover shadow-lg"
          alt={`${project.title} Feature Image.`}
        />

        {/* Links and Technologies for small screens */}
        <div className="block lg:hidden my-6">
          {/* Links */}
          <div className="mb-4">
            <h2 className="font-bold text-2xl mb-2">Live Links</h2>
            {project.github_link ? (
              <Link
                href={project.github_link}
                target="_blank"
                className="bg-foreground rounded-full p-3 text-background font-semibold hover:bg-teal-400 transition shadow-md mr-2"
              >
                Git Repo
              </Link>
            ) : (
              <Link
                href={project.github_link}
                target="_blank"
                isDisabled
                className="bg-foreground rounded-full p-3 text-background font-semibold hover:bg-teal-400 transition shadow-md mr-2"
              >
                Git Repo
              </Link>
            )}
            {project.website_link ? (
              <Link
                href={project.website_link}
                target="_blank"
                className="bg-foreground rounded-full p-3 text-background font-semibold hover:bg-teal-400 transition shadow-md"
              >
                Live Site
              </Link>
            ) : (
              <Link
                target="_blank"
                isDisabled
                className="bg-foreground rounded-full p-3 text-background font-semibold transition shadow-md"
              >
                Live Site
              </Link>
            )}
          </div>

          {/* Technologies */}
          <div>
            <h2 className="font-bold text-2xl mb-2">Technologies Used</h2>
            <div className="flex flex-wrap">
              {project.technologies_used.map((techId, index) => (
                <span
                  key={index}
                  className="text-xs tracking-wide me-2 mb-2 px-2 py-1 rounded-sm bg-teal-100/10 shadow-md cursor-pointer text-foreground hover:text-teal-300"
                >
                  {technologiesMap[techId]}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Rest of the main content */}
        <h2 className="mt-8 mb-4 text-3xl font-semibold">Project Intro</h2>
        <p className="font-light mb-6">{project.intro}</p>
        <h2 className="mt-8 mb-4 text-3xl font-semibold">Project Brief</h2>
        <p className="font-light mb-6">{project.the_brief}</p>

        {/* Website Images */}
        <div>
          <h2 className="mt-8 mb-4 text-3xl font-semibold">Website Images</h2>
          {websiteImages.length > 0 ? (
            websiteImages.map((img, index) => (
              <Image
                key={index}
                src={img.image}
                alt={img.image_alt_text}
                className="mx-auto mb-6 rounded-lg shadow-lg"
              />
            ))
          ) : (
            <h3>Examples coming soon</h3>
          )}
        </div>

        {/* Mobile Design Images */}
        <div>
          <h2 className="mt-8 mb-4 text-3xl font-semibold">
            Mobile Design Images
          </h2>
          {mobileDesignImages.length > 0 ? (
            mobileDesignImages.map((img, index) => (
              <Image
                key={index}
                src={img.image}
                alt={img.image_alt_text}
                className="mx-auto mb-6 rounded-lg shadow-lg"
              />
            ))
          ) : (
            <h3>Examples coming soon</h3>
          )}
        </div>
      </main>

      {/* Sidebar for medium and larger screens */}
      <aside className="sticky top-24 hidden lg:block self-start w-72 h-fit ml-8 bg-gray-800/80 p-6 rounded-lg shadow-lg">
        {/* Sidebar content */}
        <User
          name="Ruairidh MacArthur"
          description={`Full Stack Developer`}
          avatarProps={{
            src: "/roo.jpg",
          }}
        >
          Roo
        </User>
        <h3 className="font-bold text-xl mb-4 mt-6">Live Links</h3>
        <div className="mb-4">
          {project.github_link ? (
            <Link
              href={project.github_link}
              target="_blank"
              className="bg-foreground rounded-md p-3 text-background font-semibold hover:bg-teal-400 transition shadow-md mr-2"
            >
              Git Repo
            </Link>
          ) : (
            <Link
              href={project.github_link}
              target="_blank"
              isDisabled
              className="bg-foreground rounded-md p-3 text-background font-semibold hover:bg-teal-400 transition shadow-md mr-2"
            >
              Git Repo
            </Link>
          )}
          {project.website_link ? (
            <Link
              href={project.website_link}
              target="_blank"
              className="bg-foreground rounded-md p-3 text-background font-semibold hover:bg-teal-400 transition shadow-md"
            >
              Live Site
            </Link>
          ) : (
            <Link
              target="_blank"
              isDisabled
              className="bg-foreground rounded-md p-3 text-background font-semibold transition shadow-md"
            >
              Live Site
            </Link>
          )}
        </div>

        <h3 className="font-bold text-xl mb-4 mt-6">Technologies Used</h3>
        <div className="flex-wrap flex">
          {project.technologies_used.map((techId, index) => (
            <span
              key={index}
              className="cursor-default text-xs tracking-wide me-2 mb-2 px-2 py-1 rounded-sm bg-teal-100/10 shadow-md text-foreground"
            >
              {technologiesMap[techId]}
            </span>
          ))}
        </div>
      </aside>
    </div>
  );
}
