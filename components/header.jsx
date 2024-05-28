import Link from "next/link";
import { FaPaintBrush } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

export default function Header() {
  const navClasses =
    "p-3 flex items-center justify-between bg-neutral-800 text-neutral-100";
  const ulClasses = "flex gap-[50px] text-2xl p-3";
  const linkClasses = " border-2 p-3 rounded-lg hover:bg-neutral-600";
  const logoClasses = "border-2 p-5 rounded-full cursor";

  return (
    <header>
      <nav className={navClasses}>
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
    </header>
  );
}
