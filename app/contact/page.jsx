import Section from "@/components/section.jsx";

export default function Contact() {
  const h1Styled = "mt-[50px] text-4xl text-2xl text-center";
  const divContainer =
    "mt-[50px] flex justify-center align-center gap-[50px] border-2 border-red-200";
  const divContainerElements =
    "w-[350px] h-[350px] text-center flex-col justify-center content-center border-2 border-red-100";

  return (
    <Section>
      <h1 className={h1Styled}>Contact</h1>
      <div className={divContainer}>
        <div className={divContainerElements}>
          <div>img</div>
          <h3>icon</h3>
          <h4>text</h4>
        </div>
        <div className={divContainerElements}>
          <div>img</div>
          <h3>icon</h3>
          <h4>text</h4>
        </div>
        <div className={divContainerElements}>
          <div>img</div>
          <h3>icon</h3>
          <h4>text</h4>
        </div>
      </div>
    </Section>
  );
}
