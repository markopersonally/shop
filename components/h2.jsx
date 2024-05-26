export default function H2({ children }) {
  const h2Styled =
    "m-auto p-[15px] mt-[50px] w-[350px] text-4xl text-center uppercase font-bold border-2 border-neutral-800";
  return <h2 className={h2Styled}>{children}</h2>;
}
