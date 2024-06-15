'use client';

import { getSoldBreadsCount } from "@/server/order.service";
import Header from "./components/Header";
import Main from "./components/Main";
import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  text-align: center;
  margin-top: 50px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.20000000298023224px;
  text-align: center;
`


export default function Home() {
  
  return (
    <body>
      <Header />
      <Main />
      <Footer>— Tem pães?<br></br>— Sães<br></br>— Então trães<br></br>Com 🥖 InfoJr UFBA</Footer>
    </body>
  );
}
