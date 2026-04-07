import { RxDashboard } from "react-icons/rx";
import React from "react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group block transition-transform hover:scale-105 active:scale-95"
    >
      <div
        className="
        /* Mobile: 64px (w-16) */
        w-16 h-16 
        /* Tablet: 80px (sm:w-20) */
        sm:w-20 sm:h-20 
        /* Desktop: 104px (lg:w-26 - assuming custom config or close to w-24/w-28) */
        lg:w-24 lg:h-24 
        flex items-center justify-center 
        bg-[#71AC16] 
        shadow-lg 
        rounded-full 
        transition-all 
        duration-300
      "
      >
        <RxDashboard
          className="
            text-white 
            /* Mobile: 32px */
            size-8 
            /* Tablet: 40px */
            sm:size-10 
            /* Desktop: 48px (~size 50) */
            lg:size-12
          "
        />
      </div>
    </Link>
  );
}
