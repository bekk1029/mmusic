"use client";

import Image from "next/image";
import React, { useState } from "react";
import Tooltip from "./shared/tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardStep,
  faCircleMinus,
  faCirclePlus,
  faForwardStep,
  faList,
  faPause,
  faPlay,
  faRepeat,
  faShuffle,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

const FooterPlayer: React.FC = () => {
  const [volume, setVolume] = useState<number>(50);
  const [isFavorite, setFavorite] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isAdded, setAdded] = useState<boolean>(false);
  const [isLooping, setLooping] = useState<boolean>(false);
  const [isShuffling, setShuffling] = useState<boolean>(false);

  const toggleState = (
    setState: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setState((prev) => !prev);
  };

  return (
    <div className="fixed bottom-0 z-20 left-0 w-full bg-[linear-gradient(to_right_top,#0061ff_0%,#01235c_100%)] text-white py-3 px-4 flex items-center justify-between space-x-6 md:border-none border-t-[1.5px] border-t-gray-400">
      {/* Left Section */}
      <div className="flex items-center md:space-x-6 space-x-4">
        <div className="relative w-[35px] md:w-[45px] h-[36px] md:h-[46px] overflow-hidden rounded-lg">
          <Image
            src="/images/artist-1.jpg"
            alt="Album Art"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] md:text-xs font-normal">All Night</span>
          <span className="text-xs md:text-sm font-bold text-white">AMRA</span>
        </div>
        <div className="sm:flex space-x-2 items-center hidden">
          <button
            onClick={() => toggleState(setFavorite)}
            className="relative group"
          >
            <FontAwesomeIcon
              icon={isFavorite ? solidHeart : regularHeart}
              color={isFavorite ? "red" : "white"}
              fontSize={18}
            />

            <Tooltip title={isFavorite ? "Болиулах" : "Дуртай"} />
          </button>
          <button
            onClick={() => toggleState(setAdded)}
            className="relative group"
          >
            <FontAwesomeIcon
              icon={isAdded ? faCircleMinus : faCirclePlus}
              fontSize={18}
            />
            <Tooltip title="Микс тохиргоо" />
          </button>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center lg:space-x-4 space-x-2">
          <button className="md:block hidden">
            <FontAwesomeIcon icon={faBackwardStep} fontSize={20} />
          </button>
          <button
            className="rounded-full p-2"
            onClick={() => toggleState(setIsPlaying)}
          >
            <FontAwesomeIcon
              icon={isPlaying ? faPlay : faPause}
              fontSize={24}
            />
          </button>
          <button>
            <FontAwesomeIcon icon={faForwardStep} fontSize={20} />
          </button>
        </div>
        <div className="md:flex items-center space-x-2 w-[320px] lg:min-w-[560px] hidden">
          <span className="text-sm tracking-wide text-gray-300">00:56</span>
          <div className="w-full h-1 bg-[#27272A] rounded-full relative">
            <div
              className="h-1 bg-white rounded-full"
              style={{ width: "32%" }}
            />
          </div>
          <span className="text-sm tracking-wide text-gray-300">03:42</span>
        </div>
        <div className="lg:flex items-center space-x-4 hidden">
          <button
            onClick={() => toggleState(setLooping)}
            className="relative group"
          >
            <FontAwesomeIcon
              icon={isLooping ? faRepeat : faRepeat}
              opacity={isLooping ? 1 : 0.6}
              fontSize={18}
            />
            <Tooltip title={isLooping ? "Давталт болиулах" : "Давтах"} />
          </button>
          <button
            onClick={() => toggleState(setShuffling)}
            className="relative group"
          >
            <FontAwesomeIcon
              icon={faShuffle}
              fontSize={18}
              opacity={isShuffling ? 1 : 0.6}
            />
            <Tooltip title={isShuffling ? "Unshuffle" : "Shuffle"} />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="xl:flex items-center space-x-2 hidden">
        <button className="relative group">
          <p className="text-white font-bold text-sm">Д.үг</p>
          <Tooltip title="Дууны үг" />
        </button>
        <button className="relative group">
          <FontAwesomeIcon icon={faVolumeHigh} fontSize={18} />
          <Tooltip title="Дуу" />
        </button>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="w-24 h-1 bg-gray-300 rounded-full cursor-pointer"
        />
        <button className="relative group">
          <FontAwesomeIcon icon={faList} fontSize={18} />
          <Tooltip title="Жагсаалт" />
        </button>
      </div>
    </div>
  );
};

export default FooterPlayer;
