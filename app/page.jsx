import React from "react";
import Descriptions from "./components/Descriptions";
import RooImg from "./components/RooImg";
import WaveEmoji from "./components/WaveEmoji";

export default function Home() {
  return (
    <main className="flex flex-col justify-center sm:justify-start items-center min-h-screen overflow-auto p-4 sm:px-12 pt-4 sm:pt-12">
      <h1 className="mb-4">
        Hello <WaveEmoji />
      </h1>
      <RooImg />
      <h2 className="my-4 text-center">{`I'm Ruairidh MacArthur`}</h2>
      <Descriptions />
      <p className="font-light text-center mb-12 mt-4 w-full sm:w-2/3">
        {`
        It's Roo for short, originally from Scotland but based in the North
        East. I build accessible and interesting experiences on the web.`}
      </p>
    </main>
  );
}
