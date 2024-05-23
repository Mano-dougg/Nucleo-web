import { useNavigate } from 'react-router-dom';
import ButtonHome from "../components/ButtonHome";
import Header from "../components/Header";

function Home() {
  const navigate = useNavigate();

  const handleSinglePlayerClick = () => {
    navigate('/jogo');
  };

  const handleMultiPlayerClick = () => {
    navigate('/multi-player');
  };

  return (
    <>
      <Header />
      <section className="home">
        <ButtonHome text="Single Player" onClick={handleSinglePlayerClick} />
        <ButtonHome text="Multi Player" onClick={handleMultiPlayerClick} />
      </section>
    </>
  );
}

export default Home;
