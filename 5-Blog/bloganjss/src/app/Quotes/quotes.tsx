import './quotes.css';

async function Quotes() {

    return (
        <section className='secao-quotes'>
            <h1> FAVORITE QUOTES</h1>

            <div className='quotes'>
                
                <div className='one'>
                    <h3>A vida invisível de Addie LaRue</h3>
                    <p>“A escuridão afirmava que tinha lhe concedido a liberdade, mas na verdade isso não existe para uma mulher, não em um mundo em que elas são aprisionadas em suas roupas e deixadas de lado, dentro de casa, não em um mundo que só os homens têm permissão de perambular por onde querem.”</p>
                </div>

                <div className='two'>
                    <h3>Book lovers</h3>
                    <p>"Isso é vida. Você está sempre tomando decisões, tomando caminhos que o afastam do resto antes que você possa ver onde eles terminam. Talvez seja por isso que nós, como espécie, amamos tanto as histórias. Todas essas chances de do-overs, oportunidades de viver as vidas que nunca teremos."</p>  
                </div>

                <div className='three'>
                    <h3>Uma segunda chance</h3>
                    <p>"A felicidade não é aquele estado permanente que todos estamos tentando alcançar na vida — é apenas algo que aparece de tempos em tempos, às vezes em doses minúsculas que bastam para nos fazer seguir em frente."<br /></p>
                </div>

                <div className='four'>
                    <h3>Broken Knight</h3>
                    <p>“Você precisa entender que, às vezes, as consequências de suas ações são destrutivas. Você precisa se perdoar e garantir que a outra pessoa saiba que você sente muito por isso, mas você não pode fazer mais do que isso. Você não é responsável pela felicidade de outra pessoa”</p>
                </div>
            
            </div>
        </section>
    );
}

export default Quotes;
