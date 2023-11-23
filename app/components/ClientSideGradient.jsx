'use client'
import { useEffect } from "react";

const ClientSideGradient = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Get the mouse position
      const x = event.clientX;
      const y = event.clientY;

      // Add scroll offset
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // Apply a radial gradient at the mouse position
      document.body.style.backgroundImage = `radial-gradient(
        circle at ${x}px ${y + scrollY}px,
        rgba(14, 165, 233, 0.25),
        transparent 80%
      )`;
    };

    // Add mouse move event listener to the window
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up function
    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("mousemove", handleMouseMove);
      // Reset the body's background image
      document.body.style.backgroundImage = "";
    };
  }, []);

  return null;
};

export default ClientSideGradient;
