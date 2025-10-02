import React from "react";
import Image from "next/image";

const FooterImages = ({
  footerImages,
}: {
  footerImages?: { left?: string; right?: string };
}) => {
  return (
    <>
      <Image
        src={footerImages?.left || "/bread.png"}
        alt="bread-left"
        width={100}
        height={24}
        className="w-[11rem] h-[8rem] bg-no-repeat absolute bottom-10 left-0 z-[-1] lg:z-0"
      />
      <Image
        src={footerImages?.right || "/bread-large.png"}
        alt="bread-left"
        width={80}
        height={24}
        className="absolute bottom-0 right-0 w-[20rem] bg-no-repeat md:w-[16rem]"
      />
    </>
  );
};

export default FooterImages;
