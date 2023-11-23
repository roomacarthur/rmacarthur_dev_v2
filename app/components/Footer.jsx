import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faLinkedin,
  faSquareInstagram, faSpotify
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Link } from "@nextui-org/link";

//ions

const SocialIcons = () => {
  const socials = [
    {
      title: "GitHub",
      href: "https://github.com/roomacarthur",
      icon: faSquareGithub,
      ariaLabel: "Visit my GitHub profile",
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/ruairidh-macarthur/",
      icon: faLinkedin,
      ariaLabel: "Visit my LinkedIn profile",
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/thisisroo/",
      icon: faSquareInstagram,
      ariaLabel: "Visit my Instagram profile",
    },
    {
      title: "Spotify",
      href: "https://www.instagram.com/thisisroo/",
      icon: faSpotify,
      ariaLabel: "Visit my Spotify profile",
    },
  ];

  return socials.map((social, index) => (
    <div key={index}>
      <Link
        href={social.href}
        aria-label={social.ariaLabel}
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={social.icon}
          className="h-8 w-8 text-foreground hover:text-cyan-400 transition mx-4 sm:mx-0 sm:ml-4"
        />
      </Link>
    </div>
  ));
};

export default function Footer() {
  return (
    <footer className="px-10 pb-4">
      <div className="flex flex-col sm:flex-row justify-between sm:items-end">
        <div className="w-full sm:w-1/3 mb-4 sm:mb-0 text-center sm:text-left">
          <p className="text-sm font-light leading-normal text-gray-400">
            Coded in{" "}
            <Link
              className="hover:text-cyan-400 text-foreground font-semibold transition foregroundBlur"
              href="https://code.visualstudio.com/"
            >
              Visual Studio Code
            </Link>
            , built with{" "}
            <Link
              href="https://nextjs.org/"
              className="hover:text-cyan-400 text-foreground font-semibold transition foregroundBlur"
            >
              Next.js
            </Link>
            ,{" "}
            <Link
              className="hover:text-cyan-400 text-foreground transition font-semibold foregroundBlur"
              href="https://tailwindcss.com/"
            >
              Tailwind CSS
            </Link>{" "}
            and{" "}
            <Link
              className="hover:text-cyan-400 text-foreground font-semibold transition foregroundBlur"
              href="https://www.django-rest-framework.org/"
            >
              Django Rest Framework
            </Link>
            . Deployed on{" "}
            <Link
              className="hover:text-cyan-400 text-foreground font-semibold transition foregroundBlur"
              href="https://www.heroku.com/"
            >
              Heroku
            </Link>{" "}
            by yours truly.🍵
          </p>
        </div>
        <div className="w-full sm:w-1/4 flex justify-center sm:justify-end">
          <SocialIcons />
        </div>
      </div>
      <hr className="my-4 opacity-30"></hr>
      <p className="text-center mt-4 text-xs opacity-70">
        © {new Date().getFullYear()}{" "}
        <Link
          href="/"
          className="hover:text-cyan-400 text-foreground font-semibold transition foregroundBlur"
        >
          RooMacArthur.dev
        </Link>
        . All rights reserved.
      </p>
    </footer>
  );
}
