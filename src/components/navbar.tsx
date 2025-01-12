"use client";
import React, { useState } from "react";
import Tooltip from "./shared/tooltip";
import Image from "next/image";
import { faBell as regularBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./sidebar";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="w-full sm:w-[calc(100%-220px)] flex justify-between items-center gap-6 py-6 fixed top-0 px-6 md:px-8 z-30 bg-[#18181b]">
      <button className="sm:hidden flex items-center" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} fontSize={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`sm:hidden block fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      >
        <div
          className={`w-64 h-full bg-[#18181b] text-white fixed top-0 left-0 transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <Sidebar />
        </div>
      </div>

      {/* Logo */}
      <div className="sm:hidden block">
        <Image
          src="/images/Mmusic logo.png"
          alt="logo"
          width={88}
          height={32}
        />
      </div>

      {/* Navigation Arrows (Desktop Only) */}
      <div className="sm:flex items-center space-x-9 hidden">
        {["ArrowLeft", "ArrowRight"].map((iconName, index) => (
          <div
            key={index}
            className="relative group inline-block cursor-pointer"
          >
            <button className="flex items-center">
              <FontAwesomeIcon
                icon={iconName === "ArrowLeft" ? faChevronLeft : faChevronRight}
                fontSize={24}
                color="#555555"
                className="group-hover:opacity-100 group-hover:text-white opacity-50"
              />
            </button>
            <Tooltip
              title={iconName === "ArrowLeft" ? "Буцах" : "Цааш"}
              type="down"
            />
          </div>
        ))}
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-3">
        {/* National Anthem Section (Desktop Only) */}
        <div className="md:flex items-center gap-4 px-4 py-2 max-h-[46px] bg-[url('/images/MGLflag.png')] bg-cover bg-center rounded-full hidden">
          <h2 className="font-semibold text-sm text-[#F3F4F6] truncate whitespace-nowrap">
            Монгол улсын төрийн дуулал
          </h2>
          <div className="relative group cursor-pointer rounded-full bg-white text-center flex justify-center items-center">
            <FontAwesomeIcon
              icon={faPlayCircle}
              fontSize={35}
              color="#6B7280"
            />
            <Tooltip title="Сонсох" type="down" />
          </div>
        </div>

        {/* Notification Bell */}
        <div className="relative group sm:inline-block hidden cursor-pointer px-3.5 py-2.5 rounded-full bg-[#262626]">
          <FontAwesomeIcon icon={regularBell} fontSize={20} />
          <Tooltip title="Мэдэгдэл" type="down" />
        </div>
        <button className="sm:hidden flex items-center">
          <FontAwesomeIcon icon={faBell} fontSize={20} />
        </button>

        {/* User Profile */}
        <div className="flex items-center max-h-[46px] space-x-3 bg-[#27272A] rounded-full sm:p-1.5">
          <div className="flex items-center gap-2">
            <div className="relative w-[29px] h-[29px] sm:w-[38px] sm:h-[38px]">
              <Image
                src="/images/profile.png"
                alt="profile"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h2 className="lg:block hidden font-bold text-sm text-[#E4E4E7]">
              Хэрэглэгч
            </h2>
          </div>
          <div className="lg:block hidden">
            <FontAwesomeIcon icon={faChevronDown} fontSize={12} />
          </div>
          <div className="lg:block hidden"></div>
        </div>
      </div>
    </div>
  );
}
