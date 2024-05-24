export default function Section({ children }) {
  const sectionStyled = "h-max my-[50px] mx-auto";
  return <section className={sectionStyled}>{children}</section>;
}
