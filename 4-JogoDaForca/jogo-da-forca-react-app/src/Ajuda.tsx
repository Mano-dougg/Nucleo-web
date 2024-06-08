import './Ajuda.css';

interface AjudaProps {
  show: boolean;
  onClose: () => void;
}

const Ajuda: React.FC<AjudaProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="ajuda-overlay">
      <div className="ajuda-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Como Jogar HANGMAN:</h2>
        <p>As <span className='atencao'>regras</span> do jogo da forca são <span className='joia'>simples</span>:</p>
        <ul>
          <li>O usuário tem a opção de <span className='joia'>salvar</span> uma palavra no banco de palavras ou <span className='joia'>jogar</span> com uma palavra <span className='atencao'>temporária</span></li>
          <br />
          <li>Você pode adivinhar uma letra por vez e cada <span className='joia'>acerto</span> revela a letra na palavra.</li>
          <br />
          <li>Com 6 tentativas todo o boneco é <span className='atencao'>pendurado</span> na corda e você <span className='atencao'>perde</span></li>
          <br />
          <li>Acesse banco de palavras para <span className='joia'>adicionar</span> nova palavra ao vocabulário ou <span className='atencao'>resetar</span> as palavras disponíveis</li>
        </ul>
      </div>
    </div>
  );
};

export default Ajuda;
