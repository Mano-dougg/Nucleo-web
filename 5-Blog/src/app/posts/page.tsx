import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import { PostCard } from "@/components/PostCard"
import styles from "./page.module.css";


export default async function Page() {
  const client = createClient();
  const posts = await client
    .getAllByType("post")
    .catch(() => notFound());

  return (
    <main>
      <h1>Our Posts</h1>

      <section className={styles.grid_posts}>
        {posts.map((post) => {
          return (
            <PostCard key={post.id} post={post} />
          );
        })}
      </section>
    </main>
  );
}
