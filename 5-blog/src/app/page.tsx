import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/(Header)/Page";
import Footer from "./Components/(Footer)/Page";
import HomePage from "./Components/HomePage/Page";
import PostPage from "./Components/PostPage/Page";
import AutorPage from "./Components/AutorPage/Page";
import Carousel from "./Components/CaroulselSwiper/Slider";

export default function Home() {
  return (
    <>
    <Header/>
    
    <HomePage/>
    <Footer/>
   
    </>
  );
}
