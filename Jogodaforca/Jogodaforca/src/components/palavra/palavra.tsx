import styles5 from './palavra.module.css'
import styled from 'styled-components'


const Palavra = styled.div`
@media screen and (min-width: 200px) and (max-width:768px){
    width: 48px;
    height: 36px;
    left: 256px;
    gap: 0px;
    opacity: 0px;    
    letter-spacing:17px;
    border-radius: 8px;
    font-family: Inter;
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    text-align: center;
    color: #0A3871;
    position: relative;
    top:250px;
    left:10%;
    text-transform: uppercase; 
    white-space:nowrap;
}
@media screen and (min-width: 768px) and (max-width:1270px){
    width: 80px;
    height: 72px;
    left: 384px;
    letter-spacing:35px;
    border-radius: 8px;
    font-family: Inter;
    font-size: 48px;
    font-weight: 400;
    line-height: 72px;
    text-align: center;
    color: #0A3871;
    position: relative;
    top:560px;
    left:20%;
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
    top:450px;
    left:30.6%;
    text-transform: uppercase; 
}
`

interface EscondidaProps{
    valor : string
    letras : string[]
}

function PalavraESCRITA({ valor, letras }: EscondidaProps) {
    return (
      <Palavra>
        {valor.split('').map((letter, index) => (
          <span
            key={index}
            className={styles5.span}
          >
            <span style={{ visibility: letras.includes(letter) ? 'visible' : 'hidden' }}>
              {letter}
            </span>
          </span>
        ))}
      </Palavra>
    );
  }

export default PalavraESCRITA