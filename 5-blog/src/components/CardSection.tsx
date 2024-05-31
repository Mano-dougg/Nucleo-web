import React from 'react';
import Card from "./Card";

interface CardSectionProps {
    titulo: string;
}

const CardSection: React.FC<CardSectionProps> = ({ titulo }) => {
    return (
        <section className="cardSection">
            <h1 className="tituloCardSection">{titulo}</h1>
            <div className="cardContainer">
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    );
}

export default CardSection;
