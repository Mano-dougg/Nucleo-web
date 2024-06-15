"use client"
import Image from 'next/image'
import Lixo from '../img/Lixo.png'
import axios from 'axios'
import {useState } from 'react'
import This from './content'


export default async function content(){

    async function remove(id: any) {

         const addPerson = await axios.delete(`http://localhost:3003/remove/${id}`)
         }
    const [, forceRender] = useState(false);
    //const handleClick = () => {
    //    forceRender((prev) => !prev);
    //};

    const reRender = () => { 
        //forceRender((prev) => !prev);

        window.location.reload();
    }; 

    const people = await axios.get('http://localhost:3003/line')
    console.log(people.data)
    const arr = people.data
    const for_of = []
    for (let item of arr) {
      for_of.push(
<div className="Cliente" key={item.id}>
            <div className="Cliente1">
                <h5>{item.name}</h5>
                <div className="InformacaoInferior">
                    <h6>Total de pães: {item.bread_total} pães</h6>
                    <h6>Total a pagar: R$ {item.bread_total * 0.5}</h6>
                </div>
            </div>
            <Image src={Lixo} alt="" onClick={() => {
               remove(item.id) 
               //handleClick()
                reRender()
            }}></Image>
            </div>
    
    );
     }

    return(
        <div>
        

        <div className="Lista">
            
            {for_of}
           
        </div>
        </div>
    )
}