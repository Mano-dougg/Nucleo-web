'use client';
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
}

const Main: React.FC<MainProps> = ({ openMenu }) => {
  const openModal = () => {
    openMenu(true);
  };

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <section className={styles.information}>
          <InfoCard Text="Pessoas na fila" Value="7" Icon={PeopleIcon} />
          <InfoCard Text="Pães vendidos" Value="350" Icon={CartIcon} />
          <InfoCard Text="Entrada" Value="R$ 175,00" Icon={DollarSignIcon} Highlight={true} />
        </section>

        <section className={styles.sales}>
          <span className={styles.addPeople} onClick={openModal}>+ Adicionar pessoa a fila</span>
          <div className={styles.salesList}>
            <SaleCard Name="Alexandre Shyjada Sousa" Breads={50} Value={25} Icon={TrashIcon} />
            <SaleCard Name="Matheus Novais" Breads={50} Value={25} Icon={TrashIcon} />
            <SaleCard Name="Victor Peixoto" Breads={50} Value={25} Icon={TrashIcon} />
            <SaleCard Name="Kennedy Anderson" Breads={50} Value={25} Icon={TrashIcon} />
            <SaleCard Name="João Victor" Breads={50} Value={25} Icon={TrashIcon} />
            <SaleCard Name="Thales Brito" Breads={50} Value={25} Icon={TrashIcon} />
            <SaleCard Name="Ivens Joris" Breads={50} Value={25} Icon={TrashIcon} />
          </div>
        </section>

        <div className={styles.footerMessage}>Com 💛 Info Jr UFBA 2022</div>
      </div>
    </main>
  );
};

export default Main;
