'use client'
import { useRouter } from "next/navigation";
import "./home.css";
import Header from "../Header/page";

export default function Home() {

    return (
        <section className="home-container">
            <Header/>
            
        </section>
    );
}