"use client";
import { useState } from "react";

import Link from "next/link";
import { FaPaintBrush } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { TbMenuDeep } from "react-icons/tb";

export default function Header() {
  const [navMobile, setNavMobile] = useState(false);

  const handleToggle = () => {
    setNavMobile(!navMobile);
  };

  const navClasses =
    "p-3 flex items-center justify-between bg-neutral-800 text-neutral-100";
  const ulClasses = "flex items-center gap-[50px] text-xl p-3";
  const linkClasses = " border-2 p-3 rounded-lg hover:bg-neutral-600";
  const logoClasses = "border-2 p-5 rounded-full cursor";

  const burgerMenu = "text-[35px] cursor-pointer";
  const mobileMenuClasses = navMobile ? "flex" : "hidden";
  const mobileClasses = "w-full flex justify-around";
  const mobileUlClasses = "w-full flex flex-col items-center";
  const mobileLinkClasses = "border-0";

  return (
    <header>
      {/* desktop */}
      <nav className={`${navClasses} hidden lg:flex`}>
        <Link href="/" className={logoClasses}>
          <FaPaintBrush />
        </Link>
        <ul className={ulClasses}>
          <Link className={linkClasses} href="/">
            Home
          </Link>
          <Link className={linkClasses} href="/about">
            About Me
          </Link>
          <Link className={linkClasses} href="/pictures">
            Pictures
          </Link>
          <Link className={linkClasses} href="/contact">
            Contact
          </Link>
          <Link className={linkClasses} href="/store">
            <MdOutlineLocalGroceryStore />
          </Link>
        </ul>
      </nav>
      {/* tablet/mobile */}
      <nav className={`${navClasses} flex-col lg:hidden`}>
        <div className={mobileClasses}>
          <Link href="/" className={logoClasses}>
            <FaPaintBrush />
          </Link>
          <TbMenuDeep onClick={handleToggle} className={burgerMenu} />
        </div>
        <ul className={`${mobileUlClasses} ${mobileMenuClasses}`}>
          <Link className={`${linkClasses} ${mobileLinkClasses}`} href="/">
            Home
          </Link>
          <Link className={`${linkClasses} ${mobileLinkClasses}`} href="/about">
            About Me
          </Link>
          <Link
            className={`${linkClasses} ${mobileLinkClasses}`}
            href="/pictures"
          >
            Pictures
          </Link>
          <Link
            className={`${linkClasses} ${mobileLinkClasses}`}
            href="/contact"
          >
            Contact
          </Link>
          <Link className={`${linkClasses} ${mobileLinkClasses}`} href="/store">
            <MdOutlineLocalGroceryStore />
          </Link>
        </ul>
      </nav>
    </header>
  );
}
