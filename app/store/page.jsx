import Section from "@/components/section.jsx";

export default function Store() {
  const formStyled =
    "m-auto w-1/2 p-[50px] flex flex-col gap-[20px] justify-center bg-neutral-500 rounded-xl";
  const selectStyled = "p-2 bg-neutral-200 border-2 border-neutral-500";
  const inputStyled = "p-2 bg-neutral-200 border-2 border-neutral-500";
  const buttonStyled = "w-[100px] mt-[40px] m-auto p-2 bg-neutral-200 hover:bg-neutral-900 hover:text-neutral-200 ease-in-out duration-1000 rounded-xl transiton-1s";

  return (
    <Section>
      <form className={formStyled}>
        <label>Choose title:</label>
        <select className={selectStyled} name="options" id="select">
          <option>Order</option>
          <option>Ask about something..</option>
          <option>Other...</option>
        </select>
        <label>Info</label>
        <input className={inputStyled} type="text" placeholder="info"/>
        <label>Your e-mail:</label>
        <input className={inputStyled} type="email" placeholder="email"/>
        <textarea placeholder="Write more information.."></textarea>
        <button className={buttonStyled}>Send</button>
      </form>
    </Section>
  );
}
