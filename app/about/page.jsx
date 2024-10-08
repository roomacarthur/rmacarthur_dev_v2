import { Link } from "@nextui-org/link";
import React from "react";

export const metadata = {
  title: "RM | About me",
};

export default function aboutPage() {
  const techStack = [
    { title: "HTML", color: "#e44b23" },
    { title: "JavaScript", color: "#f1e05a" },
    { title: "CSS", color: "#4C366D" },
    { title: "Python", color: "#F8C025" }, // below needs updating.
    { title: "jQuery", color: "" },
    { title: "React", color: "#2AC5F4" },
    { title: "Next.js", color: "#000" },
    { title: "Django", color: "#18571f" },
    { title: "Django Rest Framework", color: "#800b0b" },
    { title: "PostgreSQL", color: "#" },
    { title: "AWS", color: "#d6880b" },
    { title: "S3", color: "" },
    { title: "Heroku", color: "#7224d1" },
  ];

  const interests = [
    { title: "Rugby", emoji: "🏉" },
    { title: "Skiing", emoji: "⛷️" },
    { title: "Carpentry", emoji: "🪚" },
    { title: "Photography", emoji: "📷" },
    { title: "Tech", emoji: "📱" },
    { title: "Gaming", emoji: "🎮" },
    { title: "Finance", emoji: "💰" },
    { title: "Business", emoji: "👨🏼‍💼" },
  ];

  return (
    <main className="min-h-[80vh] sm:w-[80%] mx-auto p-4 sm:px-12 pt-4 sm:pt-12">
      <h1 className="mb-12 text-5xl font-black text-foreground text-center">
        About me 👀
      </h1>
      <div className="flex flex-col sm:flex-row">
        <div className="md:w-2/3 font-light tracking-wide leading-normal sm:pr-4">
          <p className="mb-4 break-normal">
            {`
            Greetings! I'm Ruairidh MacArthur but most people call me Roo, I'm a
            driven Full Stack Developer, whose journey from the realms of
            business management to the dynamic world of coding has been fueled
            by a passion for learning and innovation. Equipped with a `}
            <Link
              href="https://www.credential.net/136ea75f-6a6c-4e7d-9b96-185e49407f6e#gs.0qmvah"
              className="underline hover:text-teal-400 text-foreground font-semibold transition foregroundBlur"
            >
              Diploma
            </Link>
            {` 
            in Full Stack Software Development from `}
            <Link
              href="https://codeinstitute.net/"
              className="underline hover:text-teal-400 text-foreground font-semibold transition foregroundBlur"
            >
              Code Institute
            </Link>
            {`
            , I've honed my skills in React, Django, and a suite of modern
            technologies, preparing myself to tackle complex web development
            challenges.`}
          </p>
          <p className="mb-4">
            {`
            My background in business management has been instrumental in
            shaping my approach to technology solutions — focusing on user
            experience, efficiency, and the broader business impact. This unique
            blend of business acumen and technical expertise allows me to create
            applications that are not just technically sound but also
            strategically aligned with business goals.`}
          </p>
          <p className="mb-4">
            {`
            Beyond the world of code, my passion for photography takes me on
            adventures capturing landscapes and nightscapes, while my love for
            the great outdoors keeps me constantly inspired and energized. This
            creative pursuit complements my technical work, bringing a balance
            of precision and artistry to my projects.`}
          </p>
          <p className="mb-4">
            {`
            I'm on an exhilarating journey, bridging technology and creativity.
            If you're looking for a developer with a diverse perspective, a keen
            eye for detail, and a zest for tackling new challenges, `}
            <Link
              href="/contact"
              className="underline hover:text-teal-400 text-foreground font-semibold transition foregroundBlur"
            >
              let’s connect
            </Link>
            {` 
            and explore how we can collaborate on your next project or simply
            exchange stories about coding and the great outdoors.`}
          </p>
        </div>

        {/* Tech stack and interests side bar */}
        <div className="md:w-1/3 mt-8 mb-8 sm:mb-8 sm:mt-0 rounded-xl bg-gray-800/70 p-4 shadow-lg">
          <h2 className="pb-4">Tech Stack</h2>
          <div>
            {techStack.map((stack, index) => (
              <span
                key={index}
                style={{ color: stack.color }}
                className="inline-block mr-2 mb-2 px-2 py-1 rounded-full text-xs tracking-wide font-bold shadow-md bg-foreground/40 cursor-default"
              >
                {stack.title}
              </span>
            ))}
          </div>
          <h2 className="pb-4 mt-4">Interests</h2>
          <div>
            {interests.map((interest, index) => (
              <span
                key={index}
                className="inline-block mr-2 mb-2 px-4 py-1 rounded-full text-sm font-bold bg-foreground/30 shadow-md cursor-default"
              >
                {interest.title} {interest.emoji}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
