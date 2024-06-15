import React, { Children, useState } from "react";
import "../app/globals.css";
import TransactionA from "./TransactionA";
import TransactionB from "./TransactionB";
import TransactionQ from "./TransactionQ";
import Logo from "./Logo";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => (
  <>
    <div className="bg-plightbrown w-screen h-[374px] absolute top-0" />
    <header className="m-w-[1280px] flex flex-col items-center pt-20 gap-28 z-10">
      <Logo />
      <div className="self-stretch">
        <section
          className="grid grid-cols-transactions3 gap-6 justify-center m-6 mt-0 mb-0"
          id="grid"
        >
          <TransactionQ amount="7" />
          <TransactionB amount="350" />
          <TransactionA amount="R$ 175,00" />
        </section>
      </div>
    </header>
  </>
);

export default Header;
