import PICTURE_DATA from "./data";

export default function Picture() {
  const divPicture = "w-[250px] h-[250px] border-2 border-red-200";

  return (
    <div>
      {PICTURE_DATA.map((picture) => (
        <div key={picture.id} id={picture.id} className={divPicture}>
          <img src={picture.img} alt={picture.title} />
          <h3>{picture.title}</h3>
        </div>
      ))}
    </div>
  );
}
