// page.tsx
import React, { useState } from "react";
import Image from "next/image";
import "./header.css";

export default function Header() {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <header
            className={`header-container ${hovered ? 'expanded' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <section className="icons-header">
                <div className="navbar">
                    <button><Image src="/movie.png" alt="Exemplo" width={30} height={30} />
                    {hovered && ( <p className="additional-content"> Ver filmes </p> )}</button> 
                </div>
                <div className="navbar">
                    <button><Image src="/search.png" alt="Exemplo" width={30} height={30} />
                    {hovered && ( <p className="additional-content"> Procurar filmes </p> )}</button> 
                </div>
                <div className="navbar">
                    <button><Image src="/heart.png" alt="Exemplo" width={30} height={30} />
                    {hovered && ( <p className="additional-content"> Meus favoritos </p> )}</button> 
                </div>
            </section>

        </header>
    );
}
