
import { createClient } from "@/prismicio";
import Header from "@/Components/Header/Header";
import { PostItem } from "@/Components/PostItem/PostItem";
import Footer from "@/Components/Footer/Footer";

export default async function Component() {
	const prismicClient = createClient();
	const posts = await prismicClient.getAllByType("blog_post").catch(e => {
		console.error(e);
		return [];
	});

  return (
		<>
      <Header />

			<div className="postagem">
        {posts.map(post => (
					<PostItem key={post.id} post={post} />
				))}
      </div>

      <Footer />

		</>
	);
	
}
