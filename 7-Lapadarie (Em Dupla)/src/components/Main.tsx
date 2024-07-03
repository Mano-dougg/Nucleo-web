'use client';
import axios from 'axios';
import React from "react";
import styles from "./Main.module.css";

import InfoCard from "@/components/InfoCard";
import SaleCard from "@/components/SaleCard";

import PeopleIcon from "@/assets/People.svg";
import CartIcon from "@/assets/Cart.svg";
import DollarSignIcon from "@/assets/DollarSign.svg";
import TrashIcon from "@/assets/Trash.svg";

interface MainProps {
  isOpen: boolean;
  openMenu: (open: boolean) => void;
  stats: {
    people: number;
    breads: number;
    value: number;
  };
  queue: Array<{
    id: number;
    name: string;
    breads: number;
    value: number;
  }>;
  loading: boolean;
  refreshData: () => void;
}

const Main: React.FC<MainProps> = ({ openMenu, stats, queue, loading, refreshData }) => {
  const handleRemove = async (id: number) => {
    try {
      await axios.patch(`http://localhost:8080/api/del-person/${id}`);
      refreshData();
    } catch (error) {
      console.log(error);
    }
  };

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
          <InfoCard Text="Pães vendidos" Value={stats.breads !== null ? stats.breads.toLocaleString() : "0"} Icon={CartIcon} />
          <InfoCard Text="Entrada" Value={`R$ ${stats.breads !== null ? stats.value.toLocaleString()  : "0,00"}`} Icon={DollarSignIcon} Highlight={true} />
        </section>

        <section className={styles.sales}>
          <span className={styles.addPeople} onClick={openModal}>+ Adicionar pessoa a fila</span>
          <div className={styles.salesList}>
            {
              (queue.length === 0) || (queue[0].id !== 0)
              ?
              queue.map((sale) => (
                <SaleCard
                  key={sale.id}
                  id={sale.id}
                  Name={sale.name}
                  Breads={sale.breads}
                  Value={sale.value}
                  Icon={TrashIcon}
                  onRemove={handleRemove}
                />
              ))
              : ""
            }
          </div>
        </section>

        <div className={styles.footerMessage}>Com 💛 Info Jr UFBA 2022</div>
      </div>
    </main>
  );
};

export default Main;
