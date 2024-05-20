import placeholder from './assets/placeholder.svg'
import './styles/section2.css'
const Section2 = () => {
    return(
        <div className="container2">
            <hr className='regua'/>
            <h2><span className="azul">Title</span></h2>
            <p>Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. </p>
            <div className="tabela">
                <div className="descricao">
                    <h4>Title</h4>
                    <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                    <p className='botao-descricao'><span className='azul'>Button Primary Light</span></p>
                </div>
                <div className="moldura">
                    <img src={placeholder} alt="moldura para imagem"/>
                </div>
            </div>
            <div className="tabela">
                <div className="descricao">
                    <h4>Title</h4>
                    <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                    <p className='botao-descricao'><span className='azul'>Button Primary Light</span></p>
                </div>
                <div className="moldura">
                    <img src={placeholder} alt="moldura para imagem"/>
                </div>
            </div>
        </div>
    )
}
export default Section2;