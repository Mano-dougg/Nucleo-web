
import { createClient } from "@/prismicio";
import Header from "@/Components/Header/Header";
import { PostItem } from "@/Components/PostItem/PostItem";

export default async function Component() {
	const prismicClient = createClient();
	const posts = await prismicClient.getAllByType("blog_post").catch(e => {
		console.error(e);
		return [];
	});

  return (
		<>
      <Header />

			<body className="postagem">
        {posts.map(post => (
					<PostItem key={post.id} post={post} />
				))}
      </body>

		</>
	);
	
}
