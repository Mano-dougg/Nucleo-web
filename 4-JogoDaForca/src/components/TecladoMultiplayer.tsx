import './style.css'; // Importando o arquivo CSS para estilização

interface TecladoProps {
  onLetraClicada: (letra: string) => void;
  letrasAdivinhadas: string[];
}

const TecladoMultiplayer: React.FC<TecladoProps> = ({ onLetraClicada, letrasAdivinhadas }) => {
  const alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div className="keyboard">
      {alfabeto.map((letra) => (
        <button
          key={letra}
          className={`key ${letrasAdivinhadas.includes(letra) ? 'guessed' : ''}`}
          onClick={() => onLetraClicada(letra)}
        >
          {letra}
        </button>
      ))}
    </div>
  );
}

export default TecladoMultiplayer;
