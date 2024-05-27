import { useState } from 'react'
import './Boneco.css'

interface NumeroProps{
    numeroTentativas: number
}

function Boneco({numeroTentativas}: NumeroProps){

    const veri = []
    
    for (let i = 0; i < numeroTentativas; i++) {
        veri[i] = false
    }


    return(

        <div className='total'>

            <div className='topo'></div>
            <div className='mid'>
                <div className='meio1'></div>
                <div className='esquerdo'>
                    <div className='meio2'></div>
                    <div className='cabeca' style={{visibility: (veri[0] == false) ? 'visible' : 'hidden'}}></div>
                    <div className='corpo' style={{visibility: (veri[1] == false) ? 'visible' : 'hidden'}}></div>
                    <div className='braco-esq' style={{visibility: (veri[2] == false) ? 'visible' : 'hidden'}}></div>
                    <div className='braco-dir' style={{visibility: (veri[3] == false) ? 'visible' : 'hidden'}}></div>
                    <div className='perna-esq' style={{visibility: (veri[4] == false) ? 'visible' : 'hidden'}}></div>
                    <div className='perna-dir' style={{visibility: (veri[5] == false) ? 'visible' : 'hidden'}}></div>
                </div>
                
            </div> 
            <div className='base'></div>
        
        </div>
    )

}


export default Boneco