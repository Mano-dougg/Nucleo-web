import "./informacoes.css";
import Image from 'next/image';
import { GetStaticProps } from "next";

async function getData() {
  const res = await fetch('http://localhost:3001/');
  const data = await res.json();
  return data;
}

export default function Informacoes() {
  export default function Page() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      getData().then(data => setData(data));
    }, []);
  
    return (
      <div>
        {data && data.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    );
  }
