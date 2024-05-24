import Section from "@/components/section.jsx";
import PICTURE_DATA from "./data.ts";
import Image from "next/image";

export default function SectionPictures() {
  const h1Styled = "mt-[50px] text-4xl text-center italic text-fuchsia-200";
  const divWrapper =
    "p-[50px] flex flex-wrap gap-[50px] justify-center items-center";
  const divPicture =
    "w-[250px] h-[250px] flex flex-col items-center gap-[15px] border-2 border-red-200";
  const imgStyled = "w-full h-full";

  return (
    <Section>
      <h1 className={h1Styled}>My pictures</h1>
      <div className={divWrapper}>
        {PICTURE_DATA.map((picture) => (
          <div key={picture.id} id={picture.id} className={divPicture}>
            <Image
              className={imgStyled}
              src={picture.img}
              alt={picture.title}
            />
            <h3>{picture.title}</h3>
            <h3>{picture.price}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
}
