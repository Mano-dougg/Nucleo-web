import { createClient } from "@/prismicio";
import Header from "./Header/Header";
import PostsRecentes from "./PostsRecentes/PostsRecentes";
import Footer from "./Footer/Footer";



export default async function Component() {
	const prismicClient = createClient();
	const posts = await prismicClient.getAllByType("blog_post").catch(e => {
		console.error(e);
		return [];
	});

  return (
		<>
			<Header />

				<PostsRecentes />

			<Footer />

		</>
	);
	
}
