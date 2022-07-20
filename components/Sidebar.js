import {
  ChartBarIcon,
  ClockIcon,
  DotsHorizontalIcon,
  HomeIcon,
} from "@heroicons/react/solid";
import { FaMicrophoneAlt } from "react-icons/fa";
import { RiCompassFill } from "react-icons/ri";
import Image from "next/image";

function Sidebar() {
  return (
    <section className="fixed top-0 z-40 flex flex-col p-4 items-center bg-black w-[90px] h-screen space-y-8">
      <Image
        src="https://rb.gy/xkacau"
        width={56}
        height={56}
        objectFit="contain"
      />
      <div className="flex flex-col space-y-8">
        <HomeIcon className=" h-6  cursor-pointer text-white opacity-[0.85]" />
        <RiCompassFill className=" h-6 text-[#808080] cursor-pointer text-2xl" />
        <FaMicrophoneAlt className=" h-6 text-[#808080] cursor-pointer ml-1" />
        <ChartBarIcon className="h-6 text-[#808080] cursor-pointer" />
        <ClockIcon className=" h-6 text-[#808080] cursor-pointer" />
        <DotsHorizontalIcon className=" h-6 text-[#808080] cursor-pointer" />
      </div>
    </section>
  );
}

export default Sidebar;