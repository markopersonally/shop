import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Footer() {
  const footerStyled =
    "m-auto p-5 bg-neutral-800 text-neutral-100 flex gap-[20px] justify-center items-center";
  const divWrapper = "w-1/3 flex flex-col gap-[20px] justify-center items-center";
  const divIconElement = "flex justify-center items-center gap-[10px]";
  const ulClasses = "flex flex-col gap-[10px] text-xl p-3";
  const linkClasses = "hover:cursor hover:text-neutral-400";

  return (
    <footer className={footerStyled}>
      <div className={divWrapper}>
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
      </div>
      <div className={divWrapper}>
        <p>
          Discover the unique charm and beauty of my original paintings, crafted
          with passion and creativity. Each piece is a vibrant expression of
          emotion and artistry, perfect for adding a touch of elegance to any
          space. Invest in art that speaks to the soul and transforms your home.
        </p>
      </div>
      <div className={divWrapper}>
        <div className={divIconElement}>
          <MdOutlineEmail />: @email
        </div>
        <div className={divIconElement}>
          <FaInstagram />: @instagram
        </div>
        <div className={divIconElement}>
          <AiFillTikTok />: @tiktok
        </div>
        <div className={divIconElement}>
          <BsFillTelephoneFill />: @090909090
        </div>
      </div>
    </footer>
  );
}
