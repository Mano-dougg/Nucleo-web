"use client";

import Header from "@/components/Header";
import HeaderCard from "@/components/HeaderCard";
import Queue, { User } from "@/components/Queue";
import CartIcon from "@/components/icons/CartIcon";
import CurrencyIcon from "@/components/icons/CurrencyIcon";
import PeopleIcon from "@/components/icons/PeopleIcon";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [breads, setBreads] = useState(0);
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    getUsers();
  }, [users]);

  useEffect(() => {
    const sum = users.reduce((sum, user) => sum + user.breads, 0);
    setBreads(sum);

    const total = sum * 0.5;
    setTotal(total);
  }, [users]);

  const deleteUser = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3001/`, { data: { id } });
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <>
      <Header users={users.length} breads={breads} total={total} />
      <main className={`flex flex-col items-center w-full px-5 max-w-[1250px]`}>
        <div className={`flex flex-col w-full gap-4 relative top-[-50px] sm:flex-row sm:justify-between`}>
          <HeaderCard title="Queue length" value={users.length} icon={PeopleIcon()} />
          <HeaderCard title="Sold breads" value={breads} icon={CartIcon()} />
          <HeaderCard title="Sum total" value={total} icon={CurrencyIcon()} total={true} />
        </div>
        <Queue onDelete={deleteUser} users={users} />

        <footer className="font-bold py-20">
          <p> Com 💛 Info Jr UFBA 2024</p>
        </footer>
      </main>
    </>
  );
}
