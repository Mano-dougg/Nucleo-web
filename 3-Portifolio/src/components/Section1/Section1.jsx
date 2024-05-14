import avatar from './imagesSection1/Avatar.png'
import checkCircle from './imagesSection1/checkCircle.png'
import styles from './Section1.module.css'

function Section1() {
    return (
        <>
        <section className={styles.Section1}>
            <article className={styles.articleSection1High}>
                <img className={styles.imgAvatar} src={avatar} alt="" />
                <h1>Hello. 
                <br/>My name is Douglas
                </h1>
                <hr />
            </article>
            <article className={styles.articleSection1Low}>
                  <div>
                    <p>
                            I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making
                        <br /> complex processes easy to use.
                    <br />
                    <br />
                            Right now, I'm Design Lead at <a href="">Holiday Extras</a>, covering all our digital platforms across
                            a whole load of brands – <br /> leading a great team across <a href=""> design</a>, UI engineering, accessibility
                        and customer experience. I'm lucky to be part of a great <br /> team of designers, writers,
                        engineers, PMs and data specialists – amongst others – testing, iterating and optimising <br /> our platforms and products.
                    <br />
                    <br />
                            I've got some <a href=""> work on Dribbble </a>, some previous work at<a href=""> Saga </a>
                        and you can find me over on twitter and sometimes <a href=""> on
                    <br /> Medium too </a>. I also take
                        <a href=""> too many photos </a>.
                    </p>
                  </div>
                    <div className={styles.callOut}>
                        <img className={styles.imgCheckCircle} src={checkCircle} alt="" />
                        <p>
                            Available for work and general design goodness – <a href=""> say hello </a>
                        </p>
                    </div>
            </article>
        </section>
        </>
    )
}

export default Section1