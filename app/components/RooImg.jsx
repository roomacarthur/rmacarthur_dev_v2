"use client";
import { Image } from "@nextui-org/image";

const RooImg = () => {
  const handleContextMenu = (event) => {
    event.preventDefault();
    console.log("Did I say you could do that?")
  };

  return (
    <Image
      src="/roo.jpg"
      alt="RooMacArthur.dev himself."
      isBlurred={true}
      isZoomed={true}
      width={300}
      height={300}
      radius="full"
      className="cursor-not-allowed"
      onContextMenu={handleContextMenu}
    ></Image>
  );
};

export default RooImg;
