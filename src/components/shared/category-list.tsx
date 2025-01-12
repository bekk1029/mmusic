import React from "react";
import Image from "next/image";

interface CategoryListProps {
  title?: string;
  description?: string;
  list: Array<{ image: string; name: string }>;
  type: "default" | "circle" | "square";
}

interface CardProps {
  image: string;
  name: string;
  type: "default" | "circle" | "square";
}

const CategoryList: React.FC<CategoryListProps> = ({
  title,
  list,
  type,
  description,
}) => {
  return (
    <div className="flex flex-col py-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col mb-4">
          <h2 className="text-white text-2xl font-bold leading-9">{title}</h2>
          <p className="text-base text-[#A1A1AA] tracking-wide">
            {description}
          </p>
        </div>
        <h6 className="text-white text-base font-medium mb-6 hidden lg:block">
          Бүгд
        </h6>
      </div>
      <div className="border-[0.1px] border-[#52525B] mb-6" />
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {list.map((item, index) => (
          <Card key={index} image={item.image} name={item.name} type={type} />
        ))}
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ image, name, type }) => {
  const shapeClass =
    type === "circle"
      ? "rounded-full"
      : type === "square"
      ? "w-[256px] h-[174px] rounded-xl"
      : "rounded-xl";

  const textClass = type === "circle" ? "text-center" : "";

  return (
    <div>
      <div
        className={`relative w-[200px] h-[200px]  overflow-hidden ${shapeClass} group `}
      >
        <Image
          src={image}
          alt={name}
          fill
          className={`object-cover`}
          loading="lazy"
        />

        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity overflow-hidden" />

        <button
          aria-label="Play"
          className="absolute z-10 bottom-6 right-6 w-[45px] h-[45px] bg-[#CFD9E9] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity "
        >
          <svg
            width="16"
            height="19"
            viewBox="0 0 16 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5 8.63398C16.1667 9.01888 16.1667 9.98113 15.5 10.366L1.625 18.3768C0.958333 18.7617 0.125001 18.2805 0.125001 17.5107L0.125002 1.48926C0.125002 0.719463 0.958336 0.238339 1.625 0.62324L15.5 8.63398Z"
              fill="#18181B"
            />
          </svg>
        </button>
      </div>

      <p className={`text-[#A1A1AA] font-normal text-sm mt-3 ${textClass}`}>
        {name}
      </p>
    </div>
  );
};

export default CategoryList;
