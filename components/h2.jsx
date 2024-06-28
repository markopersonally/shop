export default function H2({ children }) {
  const h2Styled =
    "m-auto p-[15px] mt-[50px] w-[350px] max-md:w-[200px] text-4xl max-md:text-xl text-center uppercase font-bold border-2 border-neutral-800 duration-500";
  return <h2 className={h2Styled}>{children}</h2>;
}
