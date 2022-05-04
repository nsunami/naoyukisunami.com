import Image from "next/image";
import React from "react";

export const Project = (props) => {
  const { href, title, imageSrc, fromOrange = "from-orange-500" } = props;
  return (
    <div className="flex flex-col w-64">
      <a href={href} rel="noreferrer" target="_blank">
        <h2 className="my-4 text-2xl">{title}</h2>
        <div className="relative h-[17.8rem]">
          <Image src={imageSrc} layout="responsive" alt="project 1" />
          <div
            className={
              "absolute w-64 h-[10rem] bottom-0 bg-gradient-to-tl to-transparent opacity-80 " +
              fromOrange
            }
          >
            <div className="m-2 absolute bottom-0 text-opacity-100">
              {props.children}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
