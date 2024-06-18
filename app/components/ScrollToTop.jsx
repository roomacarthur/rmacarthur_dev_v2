"use client";
import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4">
      {visible && (
        <button
          onClick={scrollToTop}
          className="p-2 bg-teal-500 text-white rounded-full shadow-lg hover:bg-teal-600 transition duration-300 ease-in-out"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
