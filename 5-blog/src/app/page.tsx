"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Header from "../Components/(Header)/Page";
import Footer from "../Components/(Footer)/Page";
import HomePage from "./HomePage/page";
import PostPage from "./PostPage/page";
import AutorPage from "./AutorPage/page";
import { useState } from "react";

export default function Home() {

  return (
    <>
    <HomePage/>
    </>
  );
}
