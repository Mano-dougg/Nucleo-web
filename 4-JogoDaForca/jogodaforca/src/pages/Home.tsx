import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        height: "100vh",
      }}
    >
      <h1
        style={{
          position: "absolute",
          top: "190px",
        }}
      >
        Jogo da Forca!!
      </h1>
      <Link className="link" to="/game">
        Começar a jogar
      </Link>
    </div>
  );
}

export default Home;
