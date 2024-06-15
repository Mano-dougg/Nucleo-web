
'use client';

import { useEffect, useState } from "react";
import { getSoldBreadsCount } from "@/server/GETOrder.service";

export default function SoldBreads() {
  const [ count, setCount ] = useState(0);

  useEffect(()=>{
    const getCount = async () =>{
      const countHere = await getSoldBreadsCount();
      setCount(countHere)
    }

    getCount();
  }, [])
  return <>{count}</>;
}
