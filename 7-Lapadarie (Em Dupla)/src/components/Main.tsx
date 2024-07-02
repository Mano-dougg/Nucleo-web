'use client';
import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";
import axios from 'axios';

import InfoCard from "@/components/InfoCard";
import SaleCard from "@/components/SaleCard";

import PeopleIcon from "@/assets/People.svg";
import CartIcon from "@/assets/Cart.svg";
import DollarSignIcon from "@/assets/DollarSign.svg";
import TrashIcon from "@/assets/Trash.svg";

interface MainProps {
  isOpen: boolean;
  openMenu: (open: boolean) => void;
}

const Main: React.FC<MainProps> = ({ openMenu }) => {
  const [stats, setStats] = useState({
    people: 0,
    breads: 0,
    value: 0,
  });
  const [queue, setQueue] = useState([
    {
      id: 0,
      name: "",
      breads: 0,
      value: 0,
    }
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await getStats();
      await getQueue();
      setLoading(false);
    };
    fetchData();
  }, []);

  async function getStats() {
    try {
      const response = await axios.get('http://localhost:8080/api/get-stats');
      const data = response.data;

      const formatted_cost = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits:2
      }).format(data.total_cost);

      const stats: any = {
        people: data.total_people,
        breads: data.total_breads,
        value: formatted_cost,
      };

      setStats(stats);
    } catch (error) {
      console.log(error);
    }
  };

  async function getQueue() {
    try {
      const response = await axios.get('http://localhost:8080/api/get-queue');
      const data = response.data;

      const queue = data.map((item: any) => ({
        id: item.id,
        name: item.client_name,
        breads: parseInt(item.breads_qt, 10),
        value: parseFloat(item.total_cost),
      }));

      setQueue(queue);
    } catch (error) {
      console.log(error);
    }
  }

  const openModal = () => {
    openMenu(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <section className={styles.information}>
          <InfoCard Text="Pessoas na fila" Value={stats.people.toLocaleString()} Icon={PeopleIcon} />
          <InfoCard Text="Pães vendidos" Value={stats.breads.toLocaleString()} Icon={CartIcon} />
          <InfoCard Text="Entrada" Value={`R$ ${stats.value.toLocaleString()}`} Icon={DollarSignIcon} Highlight={true} />
        </section>

        <section className={styles.sales}>
          <span className={styles.addPeople} onClick={openModal}>+ Adicionar pessoa a fila</span>
          <div className={styles.salesList}>
            {
              queue.map((sale) => (
                <SaleCard key={sale.id} Name={sale.name} Breads={sale.breads} Value={sale.value} Icon={TrashIcon} />
              ))
            }
          </div>
        </section>

        <div className={styles.footerMessage}>Com 💛 Info Jr UFBA 2022</div>
      </div>
    </main>
  );
};

export default Main;
