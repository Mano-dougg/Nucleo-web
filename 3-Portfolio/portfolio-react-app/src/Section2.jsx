import placeholder from './assets/placeholder.svg'
const Section2 = () => {
    return(
        <div className="container">
            <hr className='regua'/>
            <h2><span className="azul">Title</span></h2>
            <p>Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. </p>
            <div className="tabela1">
                <img src={placeholder} alt="moldura para imagem"/>
                <div className="descricao">
                    <h4>Title</h4>
                    <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                    <p className='botao-descricao'>Button Primary Light</p> 
                </div>
            </div>
            <div className="tabela2">
                <img src={placeholder} alt="moldura para imagem"/>
                <div className="descricao">
                    <h4>Title</h4>
                    <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                    <p className='botao-descricao'>Button Primary Light</p> 
                </div>
            </div>
        </div>
    )
}
export default Section2;