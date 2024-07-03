'use client'
import Header from "@/components/Header";
import Main from "@/components/Main";
import Modal from "@/components/Modal";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Page() {
  const [isOpen, setOpenMenu] = useState(false);
  const [stats, setStats] = useState({
    people: 0,
    breads: 0,
    value: 0,
  });
  const [queue, setQueue] = useState([
    {
      id: 0,
      name: "",
      breads: 0,
      value: 0,
    }
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await getStats();
      await getQueue();
      setLoading(false);
    };
    fetchData();
  }, []);

  async function getStats() {
    try {
      const response = await axios.get('http://localhost:8080/api/get-stats');
      const data = response.data;

      const formatted_cost = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits:2
      }).format(data.total_cost);

      const stats: any = {
        people: data.total_people,
        breads: data.total_breads,
        value: formatted_cost,
      };

      setStats(stats);
    } catch (error) {
      console.log(error);
    }
  };

  async function getQueue() {
    try {
      const response = await axios.get('http://localhost:8080/api/get-queue');
      const data = response.data;

      const queue = data.map((item: any) => ({
        id: item.id,
        name: item.client_name,
        breads: parseInt(item.breads_qt, 10),
        value: parseFloat(item.total_cost),
      }));

      setQueue(queue);
    } catch (error) {
      console.log(error);
    }
  }

  const refreshData = async () => {
    setLoading(true);
    await getStats();
    await getQueue();
    setLoading(false);
  };

  return (
    <>
      <Header />
      <Main
        isOpen={isOpen}
        openMenu={setOpenMenu}
        stats={stats}
        queue={queue}
        loading={loading}
        refreshData={refreshData}
      />
      <Modal
        isOpen={isOpen}
        openMenu={setOpenMenu}
        refreshData={refreshData}
      />
    </>
  )
}
