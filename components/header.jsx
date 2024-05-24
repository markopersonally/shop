import Link from "next/link";

export default function Header() {
  const navClasses = "p-3 flex items-center justify-between bg-gray-500";
  const ulClasses = "flex gap-[50px] text-2xl p-3";
  const linkClasses = "border-2 p-3 rounded-lg hover:bg-red-300";
  const logoClasses = "border-2 p-5 rounded-full";

  return (
    <header>
      <nav className={navClasses}>
        <div className={logoClasses}>logo</div>
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
        </ul>
      </nav>
    </header>
  );
}
