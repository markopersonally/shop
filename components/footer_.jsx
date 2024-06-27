import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Footer() {
  const footerStyled =
    "m-auto p-5 bg-neutral-800 text-neutral-100 flex gap-[20px] justify-around items-center max-[500px]:flex-col";

  const ulClasses = "flex flex-col gap-[10px] p-3";
  const linkClasses =
    "text-xl max-md:text-xs hover:cursor hover:text-neutral-400";

  const divBoxMiddle = "w-1/3 max-md:w-full";
  const divBoxMiddleText = "max-md:text-xs";

  const divBoxThird = "flex flex-col gap-[20px] ";
  const divIconElement = "flex justify-center items-center gap-[10px] max-md:text-xs";

  return (
    <footer className={footerStyled}>
      <nav>
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
      <div className={divBoxMiddle}>
        <p className={divBoxMiddleText}>
          Discover the unique charm and beauty of my original paintings, crafted
          with passion and creativity. Each piece is a vibrant expression of
          emotion and artistry, perfect for adding a touch of elegance to any
          space. Invest in art that speaks to the soul and transforms your home.
        </p>
      </div>
      <div className={divBoxThird}>
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
