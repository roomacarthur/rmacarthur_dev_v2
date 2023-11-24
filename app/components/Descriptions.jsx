"use client";
import React, { useState, useEffect } from "react";

export default function Descriptions() {
  const descriptions = [
    "Full Stack Developer",
    "Photographer",
    "Woodworker",
    "Tech Enthusiast",
    "Project Manager",
  ];
  const [currentDescription, setCurrentDescription] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentDescription((current) => (current + 1) % descriptions.length);
        setFade(true);
      }, 400); // fade-out duration
    }, 3000); // how long each description is displayed

    return () => clearInterval(interval);
  }, [descriptions.length]); // Include descriptions.length in the dependency array to fix heroku error.

  return (
    <h2
      className={`transition-opacity duration-500 ${
        fade ? "opacity-100" : "opacity-0"
      } my-4`}
    >
      {descriptions[currentDescription]}
    </h2>
  );
}
