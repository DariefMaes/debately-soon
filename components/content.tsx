import Image from "next/image";
import debately from "../public/DEBATELYbg.svg";
import { Info } from "../typings";

export const Content = ({ info }: { info: Info }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full gap-5 sm:pt-32 sm:pb-10 pb-16">
      <p className=" text-xl max-w-5xl font-medium text-center text-blue sm:text-4xl px-7">
        {info ? info.slogan : "Coming Soon"}
      </p>
    </div>
  );
};
