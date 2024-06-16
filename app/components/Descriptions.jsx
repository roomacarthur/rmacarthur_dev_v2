"use client";
import React, { useState, useEffect, useMemo } from "react";

export default function Descriptions() {
  const descriptions = useMemo(
    () => [
      "'Full Stack Developer 💻'",
      "'Software Tutor 🧑‍🏫'",
      "'Business Manager 💼'",
      "'Photographer 📸'",
      "'Coffee Lover ☕'",
      "'Carpenter 🪚'",
      "'Tech Enthusiast ⚙️'",
      "'Doggo Lover 🐶'",
    ],
    []
  );

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

      <div className="bg-gray-800/70 shadow-md border-t-4 border-1 rounded-t-none rounded-md overflow-hidden">
        {/* Taskbar */}
        <div className="bg-gray-700 flex justify-between items-center p-2">
          <span className="text-xs text-gray-300">MINGW64:/c/Users/Roo</span>
          <span className="text-xs text-red-500 cursor-default">✖</span>{" "}
          {/* Close icon */}
        </div>

        {/* Terminal Content */}
        <div className="pt-1 pl-2 p-4 text-sm flex">
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
      </div>
    </>
  );
}
