
import { PostItem } from '../PostItem/PostItem';
import './postsrecentes.css'
import { createClient } from "@/prismicio";

async function PostsRecentes() {

    const prismicClient = createClient();
	const posts = await prismicClient.getAllByType("blog_post").catch(e => {
		console.error(e);
		return [];
	});

    return (
        <>
            
            <div className="postagens">
                <h1>Ultimas postagens</h1>

                <div className='posts'>
                    {posts.map(post => (
                        <PostItem key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </>

    )
}

export default PostsRecentes