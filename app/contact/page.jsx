import Section from "@/components/section.jsx";
import H2 from "@/components/h2.jsx";

export default function Contact() {
  const divContainer =
    "mt-[50px] flex justify-center align-center gap-[50px] border-2 border-red-200";
  const divContainerElements =
    "w-[350px] h-[350px] text-center flex-col justify-center content-center border-2 border-red-100";

  return (
    <Section>
      <H2>Contact</H2>
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
