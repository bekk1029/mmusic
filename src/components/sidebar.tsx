import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCirclePlus,
  faClockRotateLeft,
  faHome,
  faSearch,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function Sidebar() {
  return (
    <div className="w-[295px] sm:w-[220px] h-screen bg-[#27272A] flex flex-col pl-8 py-8">
      <div className="mb-14">
        <Link href="#">
          <Image
            src="/images/Mmusic logo.png"
            alt="logo"
            width={97}
            height={35}
            priority
          />
        </Link>
      </div>

      {/* Navigation Section */}
      <nav className="flex flex-col">
        {/* Main Navigation */}
        <div className="flex flex-col gap-2 sm:mb-9 mb-0">
          <SidebarLink href="#" icon={faHome} label="Нүүр" />
          <SidebarLink href="#" icon={faSearch} label="Хайх" />
        </div>

        {/* My Library Section */}
        <div className="flex flex-col gap-2">
          <h2 className="hidden sm:block text-base font-semibold text-[#525252] uppercase">
            Миний сан
          </h2>
          <div className="flex flex-col gap-2">
            <SidebarLink
              href="#"
              icon={faClockRotateLeft}
              label="Сүүлд сонссон"
            />
            <SidebarLink href="#" icon={faHeart} label="Дуртай" />
            <SidebarLink href="#" icon={faCirclePlus} label="Микс үүсгэх" />
          </div>
        </div>

        {/* Playlist Section */}
        <div className="hidden sm:block">
          <div className="border border-[#52525B] my-2 mr-6" />
          <SidebarPlaylist
            imageSrc="/images/artist-1.jpg"
            label="Муугүй лист"
          />
          <SidebarPlaylist
            imageSrc="/images/artist-6.webp"
            label="Гоё дуунууд"
          />
        </div>
      </nav>
    </div>
  );
}

/* Sidebar Link Component */
function SidebarLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: IconProp;
  label: string;
}) {
  return (
    <Link href={href}>
      <div className="py-2 flex items-center space-x-3 cursor-pointer group relative ">
        <FontAwesomeIcon
          icon={icon}
          fontSize={18}
          color={"#9CA3AF"}
          className="group-hover:text-white"
        />
        <p className="text-[#A1A1AA] group-hover:text-white text-base font-bold leading-5">
          {label}
        </p>
        <div className="absolute w-[5px] max-h-5 h-full duration-100 right-0 bg-white group-hover:opacity-100 opacity-0" />
      </div>
    </Link>
  );
}

/* Sidebar Playlist Component */
function SidebarPlaylist({
  imageSrc,
  label,
}: {
  imageSrc: string;
  label: string;
}) {
  return (
    <div className="py-2 flex items-center space-x-3 cursor-pointer group">
      <div className="relative w-[20px] h-[20px] overflow-hidden rounded-md">
        <Image src={imageSrc} alt="Album Art" fill className="object-cover" />
      </div>
      <p className="text-[#A1A1AA] group-hover:text-white text-base leading-6">
        {label}
      </p>
    </div>
  );
}
