'use client';

import styles from "./page.module.css";
import Button from "./components/Button/Button";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main className={styles.main}>
        <Button text="Iniciar" color="#0A3871" onClick={() => router.push('/start')} text_color="#fff" />
        <Button text="Adicionar Palavra" color="#fff" onClick={() => router.push('/words')} text_color="#0A3871" />
        <Button text="Verificar Palavras" color="#fff" onClick={() => router.push('/words/modify')} text_color="#0A3871" />
    </main>
  );
}
