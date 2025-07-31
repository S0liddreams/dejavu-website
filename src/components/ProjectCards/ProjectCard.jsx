// components/ProjectCard.jsx
import Image from "next/image";
import React from "react";

const ProjectCard = ({ image, title, tag, bgColor, textColor }) => {
  return (
    <div className="xl:h-[396px] lg:h-[280px]  gap-[16px] flex flex-col w-full">
      <Image
        src={image}
        alt={title}
        className="lg:h-[280px] rounded-[16px] object-cover w-full"
        width={416}
        height={280}
      />
      <div className="lg:h-full gap-[12px] flex flex-col ">
        <p className="xl:text-[20px] text-[16px] font-medium">{title}</p>
        <div className={`w-fit px-[12px] py-[6px] rounded-full ${bgColor}`}>
          <p className={`text-[12px] ${textColor}`}>{tag}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
