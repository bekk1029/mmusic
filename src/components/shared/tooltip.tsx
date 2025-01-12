import React from "react";
interface TooltipProps {
  title: string;
  type?: "down";
}

const Tooltip: React.FC<TooltipProps> = ({ title, type }) => {
  return (
    <div
      className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-full ${
        type === "down" ? "mt-10" : "-mt-6"
      } opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-[#3F3F46] text-white text-sm font-bold whitespace-nowrap rounded-md px-2 py-1 shadow-lg`}
    >
      {title}
    </div>
  );
};

export default Tooltip;
