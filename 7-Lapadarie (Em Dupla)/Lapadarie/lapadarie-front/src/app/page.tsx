"use client";

import "./globals.css";
import { Key, useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/Header";
import Queue from "@/components/Queue";

export default function Home() {
  return (
    <div className="m-w-[900px] h-screenc flex flex-col items-center justify-center">
      <Header />
      <Queue />
    </div>
  );
}
