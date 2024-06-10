import Image from "next/image";
import { StaticImageData } from 'next/image'; 

interface ContentCardProps {
    queueText: string;
    imageSrc: StaticImageData; 
    imageAlt: string;
    numberText: string;
    customClass?: string; 
}

export default function ContentCard({ queueText, imageSrc, imageAlt, numberText, customClass }: ContentCardProps) {
    return (
        <div className={`contentCard ${customClass}`}>
            <div className="contentCardText">
                <p>{queueText}</p>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                />
            </div>
            <div className="contentCardNumber">
                <p>
                    {numberText}
                </p>
            </div>
        </div>
    );
}
