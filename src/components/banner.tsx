import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="relative w-full md:min-h-[250px] min-h-[210px] rounded-[15px] overflow-hidden">
      <Image
        src="/images/banner.png"
        alt="Banner Image"
        fill
        className="object-cover"
      />
    </div>
  );
}
