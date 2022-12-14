import Image from "next/image";
import { Social } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";

export const Footer = ({ socials }: { socials: Social[] }) => {
  return (
    <div className="absolute bottom-0 h-6 w-full flex justify-center items-center pb-16">
      {socials ? (
        <div className="relative h-6 w-[70%] justify-center flex flex-row gap-10">
          {socials.map((social, index) => (
            <a key={index} href={`${social.url}`}>
              <Image src={urlFor(social.image).url()} width={24} height={24} />
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
};
