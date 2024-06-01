import Image from "next/image"
import Link from "next/link"
import ProfilePic from "../../assets/profile-pic.png"
import Share from "../../assets/share.png"
import CardImg from "../../assets/card-img.png"

import "./Card.css"

export default function Card (){

    return (
        <section className="card">
            <h1>Notícia muito importante</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero.</p>
                <div>
                    <Link href="\" className="autor-info">
                        <Image src={ProfilePic} alt="" className="profile-img"></Image>
                        <section>
                            <h2>Fulano das IAs</h2>
                            <p>01/01/2024</p>
                        </section>
                    </Link>
                    <Image src={Share} alt="share" className="share-img"></Image>
                </div>
                <Image src={CardImg} alt="robot" className="robot-img"></Image>
        </section>
        )};
