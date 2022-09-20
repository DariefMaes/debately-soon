import logo from "../public/debately.png";
import React from "react";
import Image from "next/image";
import { Info } from "../typings";
import { urlFor } from "../sanity";

export const Header = ({ info }: { info: Info }) => {
  return (
    <div className="flex flex-col gap-4 mt-8 mb-5 sm:my-8 w-full items-center justify-between px-16">
      <div className="w-[150px] sm:w-[300px] h-[65px] relative">
        <Image
          src={urlFor(info.logo).url()}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};
