import Link from "next/link";

export default function Header() {
  return (
    <header className="p-3 flex items-center justify-between bg-gray-500">
      <div>logo</div>
      <ul className="flex gap-[50px] text-2xl">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Me</Link>
        </li>
        <li>
          <Link href="/pictures">Pictures</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
}
