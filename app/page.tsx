import Image from "next/image";
import homeImg from "@/images/teddy-ai.jpg";
import Section from "@/components/section";

export default function Home() {
  const h1Classes =
    "text-center fz-[32px] text-4xl italic uppercase text-fuchsia-100";
  const divContainer =
    "mt-[45px] w-full flex items-center gap-[50px] justify-around";
  const divParagraph = "flex flex-col items-center text-center w-[500px]";
  const h2Classes = "text-2xl text-fuchsia-400";
  const pClasses = "text-lg text-fuchsia-200 leading-normal";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-red">
      <Section>
        <h1 className={h1Classes}>🖌 welcome to my painting studio! 🖌</h1>
        <div className={divContainer}>
          <div className={divParagraph}>
            <h2 className={h2Classes}>My Passion for Painting</h2>
            <p className={pClasses}>
              Welcome to my creative corner! Painting has always been more than
              just a hobby for me; it's a profound passion that allows me to
              express my innermost thoughts and emotions. Each brushstroke is a
              journey into a world of colors and imagination, where I can
              capture moments of beauty, joy, and sometimes even sorrow. Through
              my art, I aim to connect with others, evoke feelings, and share my
              unique perspective on the world. Thank you for visiting and
              exploring my artistic creations. I hope my paintings inspire you
              as much as they inspire me.
            </p>
          </div>
          <Image src={homeImg} alt="teddy-ai" />
        </div>
      </Section>
    </main>
  );
}
