import styles5 from './palavra.module.css'
import styled from 'styled-components'


const Palavra = styled.div`
@media screen and (min-width: 200px) and (max-width:768px){
    width: 48px;
    height: 36px;
    left: 256px;
    gap: 0px;
    opacity: 0px;    
    letter-spacing:20px;
    border-radius: 8px;
    font-family: Inter;
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    text-align: center;
    color: #0A3871;
    position: relative;
    top:250px;
    left:32%;
    text-transform: uppercase; 
}
@media screen and (min-width: 768px) and (max-width:1270px){
    width: 80px;
    height: 72px;
    left: 384px;
    letter-spacing:50px;
    border-radius: 8px;
    font-family: Inter;
    font-size: 48px;
    font-weight: 400;
    line-height: 72px;
    text-align: center;
    color: #0A3871;
    position: relative;
    top:560px;
    left:28.6%;
    text-transform: uppercase; 
}
@media screen and (min-width: 1270px) {
    width: 80px;
    height: 72px;
    left: 384px;
    letter-spacing:60px;
    border-radius: 8px;
    font-family: Inter;
    font-size: 48px;
    font-weight: 400;
    line-height: 72px;
    text-align: center;
    color: #0A3871;
    position: relative;
    top:465px;
    left:37.6%;
    text-transform: uppercase; 
}
`

function Teclado(){
    const valor = 'oruan'
    const tentar = ['o', 'r','y', 'u','a','n']
    return(
    <Palavra>
        {valor.split('').map((letter,index)=>(
            <span key={index} style={{ visibility: tentar.includes(letter) ? 'visible' : 'hidden'}}>
            {letter}
            </span>
        ))}
    </Palavra>
    )
}

export default Teclado