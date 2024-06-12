import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import logo from "./assets/logo.png"

interface Order {
  id: number;
  customer_name: string;
  numberOfBreads: number;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
  FulfilledOrder: boolean;
}

function App() {
  const [queue, setQueue] = useState<Order[]>([]);
  const [fulfilled, setFulfilled] = useState<Order[]>([]);
  const [stats, setStats] = useState({
    peopleInQueue: 0,
    breadsSold: 0,
    totalSold: 0,
  });

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const ordersRes = await axios.get<Order[]>('http://localhost:3000/orders');
      const ordersData = ordersRes.data;

      // Separar os pedidos em fila e finalizados
      const queueOrders = ordersData.filter(order => !order.FulfilledOrder);
      const fulfilledOrders = ordersData.filter(order => order.FulfilledOrder);

      // Calcular estatísticas
      const breadsSold = fulfilledOrders.reduce((sum, order) => sum + order.numberOfBreads, 0);
      const totalSold = fulfilledOrders.reduce((sum, order) => sum + order.totalPrice, 0);

      setQueue(queueOrders);
      setFulfilled(fulfilledOrders);
      setStats({
        peopleInQueue: queueOrders.length,
        breadsSold,
        totalSold,
      });
    } catch (error) {
      console.error("Failed to fetch orders", error);
    }
  };

  return (
    <div className="container" >
      <img src={logo} width={155} className='logo'/>
      
      <div className='content'>
      <div className="stats">
        <div className='infos'>
          <p style={{paddingTop:'10px', paddingLeft:'10px'}}>Pessoas na fila </p>
          <p style={{fontWeight:'500', fontSize:'36px', paddingLeft:'10px'}}>{stats.peopleInQueue}</p>
        </div>
        <div className='infos' >
          <p style={{paddingTop:'10px', paddingLeft:'10px'}}>Pães vendidos </p>
          <p style={{fontWeight:'500', fontSize:'36px', paddingLeft:'10px'}}>{stats.breadsSold}</p>  
        </div>
        <div className='infos' style={{backgroundColor:'#5F3305', color:'#fff'}}>
          <p style={{paddingTop:'10px', paddingLeft:'10px'}}>Entrada </p>
          <p style={{fontWeight:'500', fontSize:'36px', paddingLeft:'10px'}}>${stats.totalSold.toFixed(2)}</p>
        </div>
      </div>
      <div className="queue">
        {/* transformar esse h2 em um botão para chamar a função post */}
        <h2 style={{color:'#5F3305'}}>+ Adicionar pessoas na fila</h2>
        <ul>
          {queue.map((order) => (
            <li key={order.id}>
              {order.customer_name} - {order.numberOfBreads} breads
            </li>
          ))}
        </ul>
      </div>
      <div className="fulfilled">
        
        <h2 style={{color:'#5F3305'}}>Finalizados</h2>
        <ul>
          {fulfilled.map((order) => (
            <li key={order.id}>
              {order.customer_name} - {order.numberOfBreads} breads
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
}

export default App;
