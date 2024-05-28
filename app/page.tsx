import Image from "next/image";
import homeImg from "@/images/teddy-ai.jpg";
import H2 from "@/components/h2.jsx";
import Link from "next/link";

export default function Home() {
  const mainStyled = "my-[50px] flex flex-col gap-10";
  const h1Classes =
    "m-auto w-[800px] p-4 text-center fz-[32px] text-4xl italic uppercase border-2 border-neutral-800 rounded-xl";
  const divContainer = "w-full flex items-center gap-[50px] justify-center";
  const divParagraph =
    "w-[500px] p-4 flex flex-col items-center text-center border-2 border-neutral-800 rounded-xl";
  const h2Classes = "text-2xl";
  const pClasses = "text-lg leading-normal";
  const imageStyled = "rounded-xl";
  const linksWrapper = "my-[50px] flex justify-around gap-[50px]";
  const linkStyled = "p-[10px] uppercase border-2 border-neutral-700 rounded-xl hover:text-neutral-300 hover:bg-neutral-700";

  return (
    <main className={mainStyled}>
      <h1 className={h1Classes}>🖌 welcome to my painting studio! 🖌</h1>
      <div className={divContainer}>
        <div className={divParagraph}>
          <h2 className={h2Classes}>My Passion for Painting</h2>
          <p className={pClasses}>
            Welcome to my creative corner! Painting has always been more than
            just a hobby for me; it's a profound passion that allows me to
            express my innermost thoughts and emotions. Each brushstroke is a
            journey into a world of colors and imagination, where I can capture
            moments of beauty, joy, and sometimes even sorrow. Through my art, I
            aim to connect with others, evoke feelings, and share my unique
            perspective on the world. Thank you for visiting and exploring my
            artistic creations. I hope my paintings inspire you as much as they
            inspire me.
          </p>
        </div>
        <Image className={imageStyled} src={homeImg} alt="teddy-ai" />
      </div>
      <div>
        <H2>picture motif</H2>
        <div className={linksWrapper}>
          <Link className={linkStyled} href="/pictures">
            nature
          </Link>
          <Link className={linkStyled} href="/pictures">
            animal
          </Link>
          <Link className={linkStyled} href="/pictures">
            flowers
          </Link>
          <Link className={linkStyled} href="/pictures">
            abstract
          </Link>
          <Link className={linkStyled} href="/pictures">
            fantasies
          </Link>
        </div>
      </div>
    </main>
  );
}
