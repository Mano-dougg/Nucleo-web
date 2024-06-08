import styles from './home.module.css';
import Image from 'next/image'
import Link from 'next/link'
import { createClient } from "../../prismicio"
import { asHTML } from "@prismicio/client"
import { PrismicNextImage } from '@prismicio/next'

export default async function Blog() {
  const prismic = createClient()
  const home = await prismic.getByUID('home' , 'home')

  console.log(JSON.stringify(home.data, null, 2))

  const title = asHTML(home.data.title)
  const subtitle = asHTML(home.data.subtitle)
  const text = asHTML(home.data.text)

  return (
    <main className={styles.homemain}>
      <article className={styles.first}>
        <h1 className={styles.title}>
          <div dangerouslySetInnerHTML={{__html: title}} />
        </h1>
        <div className={styles.text}>
          <Link href="/blog/post">
            <div dangerouslySetInnerHTML={{__html: subtitle}} />
          </Link>
          <Link href="/blog/post">
            <div dangerouslySetInnerHTML={{__html: text}} />
          </Link>
        </div>
        {
        // <Image
        //   className={styles.imagedesktop}
        //   src="/astronaut.png"
        //   alt="astronaut"
        //   width={540}
        //   height={370}
        // />
        }
        <Image
          className={styles.imagemobile}
          src="/astronautmobile.png"
          alt="astronaut"
          width={308}
          height={205}
        />
        <PrismicNextImage className={styles.imagedesktop} field={home.data.image} />

      </article>
      <article className={styles.second}>
        <h1 className={styles.secondtitle}>Últimas postagens</h1>
        <div className={styles.cardone}>
          <h2>Notícia muito importante</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero.
          </p>
          <Image
            className={styles.robotimage}
            src="/robot.png"
            alt="robot"
            width={300}
            height={150}
          />
        </div>
        <div className={styles.cardtwo}>
          <h2>Notícia muito importante</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero.
          </p>
          <Image
            className={styles.robotimage}
            src="/robot.png"
            alt="robot"
            width={300}
            height={150}
          />
        </div>
        <div className={styles.cardthree}>
          <h2>Notícia muito importante</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero.
          </p>
          <Image
            className={styles.robotimage}
            src="/robot.png"
            alt="robot"
            width={300}
            height={150}
          />
        </div>

      </article>
    </main>
  )
}
