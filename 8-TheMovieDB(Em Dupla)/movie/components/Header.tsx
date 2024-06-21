"use client"
import React from "react";
import Netflix from "../img/netflix.jpg"
import Image from "next/image";

export default function Header() {
  return (
    <>
    <div className="logoNetflix">
      <Image src={Netflix} alt=""></Image>
    </div>
    </>
  );
}
