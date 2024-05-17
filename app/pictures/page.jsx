import Header from "@/components/header.jsx";

export default function Pictures() {
  const divPicutre = "w-[250px] h-[250px] border-2 border-red-200"
  
  return (
    <>
      <Header />
      <section>
        <h1 className="text-2xl text-center">Pictures</h1>
        <div className="mt-[150px] flex justify-center">
          <div className={divPicutre}>1</div>
          <div className={divPicutre}>2</div>
          <div className={divPicutre}>3</div>
          <div className={divPicutre}>4</div>
          <div className={divPicutre}>5</div>
        </div>
      </section>
    </>
  );
}
