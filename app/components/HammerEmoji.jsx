'use client'
import React from "react";

export default function HammerEmoji() {
  return (
    <>
      <style jsx>{`
        @keyframes hammer-animation {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-20deg);
          }
          50% {
            transform: rotate(30deg);
          }
          75% {
            transform: rotate(-30deg);
          }
        }

        .hammer {
          display: inline-block;
          animation: hammer-animation 1s ease-in-out infinite;
          transform-origin: bottom right; /* Adjust as needed */
        }
      `}</style>
      <span className="hammer">🔨</span>
    </>
  );
}
