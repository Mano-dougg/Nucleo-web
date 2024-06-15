import styles from './descricao.module.css'
import CheckCircle from './img/checkCircle.svg'


function Descricao(){
    return(
        <section>
            <div className={styles.corpo}>
                <p>I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use.</p>
                <p>Right now, I'm Design Lead at Holiday Extras, covering all our digital platforms across a whole load of brands – leading a great team across design, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products.</p>
                <p>I've got some work on Dribbble, some previous work at Saga and you can find me over on twitter and sometimes on Medium too. I also take too many photos.</p>   
            </div>

            <div className={styles.caixinha}>
                <img className={styles.checkcircle} src={CheckCircle}></img>
                <p>Available for work and general design goodness – <span className={styles.highlight}>say hello</span></p>
            </div>

        </section>
        
    )
}
export default Descricao;