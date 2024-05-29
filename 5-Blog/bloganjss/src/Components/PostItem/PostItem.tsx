import Link from "next/link";
import "./postitem.css";
import { AllDocumentTypes } from "../../../prismicio-types";
import { asDate, asImagePixelDensitySrcSet, asImageSrc, asImageWidthSrcSet, asLink, asLinkAttrs, asText } from "@prismicio/client";
import dayjs from "dayjs";


interface PostItemProps {
	post: AllDocumentTypes;
}

export function PostItem({ post }: PostItemProps) {
	return (
		<section className="cardpost">
			<Link className="linkedpost" href={post.uid}>

				<div className="post">

					<h3 className="titulopost">
						{asText(post.data.titulo)}
					</h3>

					<p className="subtitulopost">{asText(post.data.subtitulo)}</p>

				</div>

			</Link>
			<section className="info">

				<div className="perfil"><img src="blair.jpg" /></div>

				<p className="whopost">

					<Link className="autor" href="#">
						{post.data.autor}
					</Link>

					<time dateTime="2023-10-10" className="data">
						{dayjs(post.first_publication_date).format("DD/MM/YYYY")}
					</time>
				</p>

			</section>

			<p className="foto">
				{<img src={asImageSrc(post.data.banner)} alt="Banner" />}
			</p>


		</section>
	);
}