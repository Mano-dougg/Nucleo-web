import Image from "next/image";
import styles from "./page.module.css";
import Header from '../../components/header'
import Center from '../../components/center'
import Content from '../../components/content'

export default function Home() {
  return (
    <div>
  <Header/>
  <Center/>
  <Content/>
  </div>
  );
}
