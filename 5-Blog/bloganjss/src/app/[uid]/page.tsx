import { createClient } from "@/prismicio";
import { asText } from "@prismicio/client";
import { PrismicImage, PrismicRichText } from "@prismicio/react";
import dayjs from "dayjs";
import "./postagem.css";
import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../Header/Header";

interface BlogPostProps {
	params: {
		uid: string;
	};
}

export default async function BlogPost({ params }: BlogPostProps) {
	const prismicClient = createClient();
	const post = await prismicClient.getByUID("blog_post", params.uid).catch(() => notFound());

	return (
		<section className="postagem">
            <Header />
			<header className="voltar">
				<Link
					href=".."
					className="hover:opacity-80 transition-opacity flex gap-2 items-center mb-5">
					<CircleArrowLeft /> Voltar
				</Link>
				
			</header>

            <section className="container">

                <div className="general">
                    <h1 className="titulo">{asText(post.data.titulo)}</h1>
                    <h2 className="subtitulo">{asText(post.data.subtitulo)}</h2>
                    <p className="sinopse">Sinopse: {asText(post.data.sinopse)}</p>

                    <div className="posted">
                        Por: {" "}{post.data.autor} {" "}em{" "}
                        {dayjs(post.first_publication_date).format("DD/MM/YYYY")}
                    </div>
                </div>

                <div className="capa">
                    {post.data.conteudo.map((item, index) => (
                        <section key={index}>
                            <PrismicImage field={item.foto} />
                        </section>
                    ))}
                </div>
                
            </section>

			<main className="conteudo">
				{post.data.conteudo.map((item, index) => (
					<section key={index}>
						<h3 className="topico">
							{asText(item.subtitulo)}
						</h3>
                        
                        <div className="corpo">
                            <PrismicRichText field={item.corpo} />
                        </div>
						
					</section>
				))}
                
			</main>
		</section>
	);
}