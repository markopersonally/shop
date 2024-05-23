import Header from "@/components/header.jsx";
// import Picture from "./Picture.jsx";

export default function Pictures() {
  const h1Styled = "mt-[50px] text-4xl text-center italic text-fuchsia-200";
  const divBox = "mt-[150px] flex justify-center flex-wrap gap-[50px]";

  return (
    <>
      <Header />
      <section>
        <h1 className={h1Styled}>My pictures</h1>
        <div className={divBox}>
          {/* <Picture /> */}
        </div>
      </section>
    </>
  );
}
