"use client"
import React from "react";
import Netflix from "../img/netflix.jpg"
import Image from "next/image";
import Modall from "../components/modal"

export default function Header() {
  return (
    <>
    <div className="logoNetflix">
      <Image src={Netflix} alt=""></Image>
    </div>
    <div className="login">
      <h2>Login</h2> 
      <h3>Email</h3>
      <input placeholder="Email"></input>
      <h3>Senha</h3>
      <input placeholder="Password"></input>
      <div className="inferior">
        <div className="Botao1">
          <button>Login</button>
        </div>
        <div className="Botao1">
          <Modall/>
        </div>
      </div>
    </div>
   
    </>
  );
}
