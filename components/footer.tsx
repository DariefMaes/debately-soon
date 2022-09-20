import Image from "next/image";
import React from "react";
import { Social } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";

export const Footer = ({ socials }: { socials: Social[] }) => {
  return (
    <div className="absolute bottom-0 h-6 w-full flex justify-center items-center pb-16">
      <div className="relative h-6 w-[70%] justify-center flex flex-row gap-10">
        {socials.map((social) => (
          <Link href={`${social.url}`}>
            <Image
              key={social._id}
              src={urlFor(social.image).url()}
              width={24}
              height={24}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
