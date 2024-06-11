import Header from "@/components/Header";
import HeaderCard from "@/components/HeaderCard";
import Queue from "@/components/Queue";
import CartIcon from "@/components/icons/CartIcon";
import CurrencyIcon from "@/components/icons/CurrencyIcon";
import PeopleIcon from "@/components/icons/PeopleIcon";

export default function Home() {
  const users = 7;
  const breads = 10;
  const total = breads * 0.5;

  return (
    <>
      <Header users={0} breads={0} total={0} />
      <main className={`flex flex-col items-center w-full px-5 max-w-[1250px]`}>
        <div className={`flex flex-col w-full gap-4 relative top-[-50px] sm:flex-row sm:justify-between`}>
          <HeaderCard title="Queue length" value={users} icon={PeopleIcon()} />
          <HeaderCard title="Sold breads" value={breads} icon={CartIcon()} />
          <HeaderCard title="Sum total" value={total} icon={CurrencyIcon()} total={true} />
        </div>
        <Queue
          users={[
            {
              id: 1,
              name: "Alexandre Shyjada Sousa",
              breads: 10
            },
            {
              id: 2,
              name: "Name2",
              breads: 30
            },
            {
              id: 3,
              name: "Name3",
              breads: 30
            },
            {
              id: 4,
              name: "Name4",
              breads: 60
            },
            {
              id: 5,
              name: "Name5",
              breads: 50
            },
          ]} />

        <footer className="font-bold py-20">
          <p> Com 💛 Info Jr UFBA 2024</p>
        </footer>

      </main>
    </>
  );
}
