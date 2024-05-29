import { createClient } from "@/prismicio";
import Header from "@/Components/Header/Header";
import { PostItem } from "@/Components/PostsRecentes/PostItem/PostItem";
import Footer from "@/Components/Footer/Footer";
import { Postdiario } from "@/Components/Postdiario/Postdiario";
import PostsRecentes from "@/Components/PostsRecentes/PostsRecentes";

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
