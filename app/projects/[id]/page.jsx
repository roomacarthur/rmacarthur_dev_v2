import { Image } from '@nextui-org/image';
import React from 'react'

export default function projectDetail() {
  return (
    <main className="min-h-screen p-4 md:p-12 lg:p-24 w-full mx-auto">
      <h1>Title</h1>
      <Image
        src="/roo.jpg"
        isBlurred={true}
        className="h-[300px] mx-auto object-cover"
      ></Image>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iure aut
        reiciendis harum in, recusandae perferendis nihil error voluptatibus
        expedita exercitationem odit quis. Maiores accusantium delectus
        inventore et libero aperiam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, illo.
      </p>
    </main>
  );
}
