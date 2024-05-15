import culita from 'C:/Users/Talit/nucleo-web/3-Portfolio/coisas/portefoleo/src/assets/cufba.png';
import styles from'./Post.module.css';

function Post(props) {

    return (
        <div className={styles.postBox}>
            <img src={culita} width={640} height={370}/>
            <div className={styles.textoPost}>
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default Post;