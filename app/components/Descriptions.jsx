"use client";
import React, { useState, useEffect } from "react";

export default function Descriptions() {
  const descriptions = [
    "'Full Stack Developer 💻'",
    "'Photographer 📸'",
    "'Project Manager 💼'",
    "'Coffee Lover ☕'",
    "'Carpenter 🪚'",
    "'Tech Enthusiast ⚙️'",
    "'Doggo Lover 🐶'",
  ];
  const [currentDescription, setCurrentDescription] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isDeleting) {
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 20); // Speed of deleting
      } else {
        setIsDeleting(false);
        setCurrentDescription((current) => (current + 1) % descriptions.length);
      }
    } else {
      if (displayedText.length < descriptions[currentDescription].length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(
            descriptions[currentDescription].slice(0, displayedText.length + 1)
          );
        }, 100); // Speed of typing
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 3000); // How long to wait before starting to delete
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isDeleting, currentDescription, descriptions]);

  return (
    <>
      <style jsx>{`
        .cursor {
          animation: blink 0.5s step-end infinite;
        }

        @keyframes blink {
          from,
          to {
            color: transparent;
          }
          50% {
            color: inherit;
          }
        }
      `}</style>

      <div className="bg-gray-800/70 pt-1 pl-2 p-4 text-sm shadow-md border-t-5 border-1 flex">
        <p className="font-mono transition-opacity duration-500 text-teal-300 mb-4">
            <span className="text-green-300">Roo@RooMacArthur.dev</span>{" "}
            <span className="text-violet-400">MINGW64</span>{" "}
            <span className="text-yellow-400">~/rmacarthur_dev</span> (main)
          <br></br>
          <span className="codeLine">$ git add app/Description.jsx</span>
          <br></br>
          <span className="text-green-300">Roo@RooMacArthur.dev</span>{" "}
          <span className="text-violet-400">MINGW64</span>{" "}
          <span className="text-yellow-400">~/rmacarthur_dev</span> (main)
          <br></br>$ git commit -m {displayedText}
          <span className="cursor">_</span>
        </p>
      </div>
    </>
  );
}
