interface JogoTempProps {
  show: boolean;
  onClose: () => void;
}

const JogoTemp: React.FC<JogoTempProps> = ({ show, onClose }) => {
    if (!show) return null;

    return(
            <>
            <h1>AAAAAAAAAAAAAAAAAAAAA</h1>
            </>
        )
}
export default JogoTemp;