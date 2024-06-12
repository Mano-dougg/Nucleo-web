import Header from "./components/Header/Header";
import Queue from "./components/Queue/Queue";
import History from "./components/History/History";
import "./page.css";

export default function Home() {
  return (
    <div className="home">
      
      <Header></Header>

      <main className="main">

        <button className="add-order"> + Adicione pessoas a fila </button>

        <Queue></Queue>

        <p className="finished"> Finalizados </p>

        <History></History>

      </main>

    </div>
  );
}
