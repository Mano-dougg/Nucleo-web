import { PrismicNextImage } from "@prismicio/next";
import { Content } from "@prismicio/client";
import styles from "./Postcard.module.css";

export const PostCard = ({
  post,
}: {
  post: Content.PostDocument;
}): JSX.Element => {
  const { data } = post;

  return (
    <div className={styles.postCard}>
      <a className={styles.link} href={'/posts/'+post.uid}>
        <PrismicNextImage className={styles.postImage} field={data.image} />

        <div className={styles.overlay}>
          <h4>{data.title}</h4>
          <span>{data.date}</span>
        </div>
      </a>
    </div>
  );
};