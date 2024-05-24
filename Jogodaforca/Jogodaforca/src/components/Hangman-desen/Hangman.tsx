import styled from 'styled-components'
import styles4 from './Hangman.module.css'


const Base = styled.div`
@media screen and (min-width: 200px) and (max-width:768px){
    width: 294px;
    height: 5px;
    top: 443px;
    left: 573px;
    gap: 0px;
    border-radius: 8px;
    background: #0A3871;
    position:absolute;
    left:57px;
    top:-160px;
}
@media screen and (min-width: 768px) and (max-width:1270px){
    width: 294px;
    height: 5px;
    top: 443px;
    left: 573px;
    gap: 0px;
    border-radius: 8px;
    background: #0A3871;
    position:absolute;
    left:260px;
    top:-1px;
}
@media screen and (min-width: 1270px) {
    width: 294px;
    height: 5px;
    top: 443px;
    left: 573px;
    gap: 0px;
    border-radius: 8px;
    background: #0A3871;
    position:absolute;
    top:-1px;
    left:40%;
}
`;

const Haste = styled.div`
@media screen and (min-width: 200px) and (max-width:768px){
    width: 4.5px;
    height: 200px;
    top: 88px;
    left: 200px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    background: #0A3871;
    position:absolute;
    top:-359.5px;
    left:31.5%;
}
@media screen and (min-width: 768px) and (max-width:1270px){
    width: 4.5px;
    height: 360px;
    top: 88px;
    left: 200px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    background: #0A3871;
    position:absolute;
    top:-359.5px;
    left:40%;
}
@media screen and (min-width: 1270px) {
    width: 4.5px;
    height: 360px;
    top: 88px;
    left: 200px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    background: #0A3871;
    position:absolute;
    top:-359.5px;
    left:43.5%;
}
`;

const Barra = styled.div`
@media screen and (min-width: 200px) and (max-width:768px){
    width: 177.75px;
    height: 4.5px;
    top: 88px;
    left: 653.67px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    background: #0A3871;
    position:absolute;
    top:-359.5px;
    left:31.5%;
}
@media screen and (min-width: 768px) and (max-width:1270px){
    width: 177.75px;
    height: 4.5px;
    top: 88px;
    left: 653.67px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    background: #0A3871;
    position:absolute;
    top:-359.5px;
    left:40%;
}
@media screen and (min-width: 1270px) {
    width: 177.75px;
    height: 4.5px;
    top: 88px;
    left: 653.67px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    background: #0A3871;
    position:absolute;
    top:-359.5px;
    left:43.5%;
}
`;

const Corda = styled.div`
@media screen and (min-width: 200px) and (max-width:768px){
    width: 4.5px;
    height: 49.5px;
    top: 88px;
    left: 826.92px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    background: #0A3871;
    position:absolute;
    top:-359.5px;
    left:77.75%;
}
@media screen and (min-width: 768px) and (max-width:1270px){
    width: 4.5px;
    height: 49.5px;
    top: 88px;
    left: 826.92px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    background: #0A3871;
    position:absolute;
    top:-359.5px;
    left:62.8%;
}
@media screen and (min-width: 1270px) {
    width: 4.5px;
    height: 49.5px;
    top: 88px;
    left: 826.92px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    background: #0A3871;
    position:absolute;
    top:-359.5px;
    left:56.5%;
}
`
const Head =  styled.div`
@media screen and (min-width: 200px) and (max-width:768px){
    width: 33px;
    height: 37px;
    top: 133px;
    left: 797.67px;
    gap: 0px;
    opacity: 0px;
    border-radius:50%;
    border:5px solid #0A3871;
    position:absolute;
    top:-311.8px;
    left:72.9%;
}
@media screen and (min-width: 768px) and (max-width:1270px){
    width: 63px;
    height: 63px;
    top: 133px;
    left: 797.67px;
    gap: 0px;
    opacity: 0px;
    border-radius:50%;
    border:5px solid #0A3871;
    position:absolute;
    top:-310.8px;
    left:58.5%;
}
@media screen and (min-width: 1270px) {
    width: 63px;
    height: 63px;
    top: 133px;
    left: 797.67px;
    gap: 0px;
    opacity: 0px;
    border-radius:50%;
    border:5px solid #0A3871;
    position:absolute;
    top:-310.40px;
    left:54.15%;
}
`

const Body = styled.div`
@media screen and (min-width: 200px) and (max-width:768px){
    width: 4.5px;
    height: 70px;
    top: 196px;
    left: 826.92px;
    gap: 0px;
    opacity: 0px;
    position:absolute;
    background: #0A3871;
    top:-270.40px;
    left:78%;
}
@media screen and (min-width: 768px) and (max-width:1270px){
    width: 4.5px;
    height: 135px;
    top: 196px;
    left: 826.92px;
    gap: 0px;
    opacity: 0px;
    position:absolute;
    background: #0A3871;
    top:-240.40px;
    left:62.9%;
}
@media screen and (min-width: 1270px) {
    width: 4.5px;
    height: 135px;
    top: 196px;
    left: 826.92px;
    gap: 0px;
    opacity: 0px;
    position:absolute;
    background: #0A3871;
    top:-240.40px;
    left:56.55%;
}
`

const Bracodireito = styled.div`
@media screen and (min-width: 200px) and (max-width:768px){
    width: 4.5px;
    height: 35px;
    top: 194.88px;
    left: 827.75px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    rotate: 30deg;
    position:absolute;
    background: #0A3871;
    top:-258px;
    left:75.6%;
}
@media screen and (min-width: 768px) and (max-width:1270px){
    width: 4.5px;
    height: 72px;
    top: 194.88px;
    left: 827.75px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    rotate: 30deg;
    position:absolute;
    background: #0A3871;
    top:-238px;
    left:60.5%;
}
@media screen and (min-width: 1270px) {
    width: 4.5px;
    height: 72px;
    top: 194.88px;
    left: 827.75px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    rotate: 30deg;
    position:absolute;
    background: #0A3871;
    top:-238px;
    left:55.2%;
}
`
const Bracoesquerdo = styled.div`
@media screen and (min-width: 200px) and (max-width:768px){
    width: 4.5px;
    height: 35px;
    top: 194.88px;
    left: 827.75px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    rotate: -30deg;
    position:absolute;
    background: #0A3871;
    top:-258px;
    left:80.3%;
}
@media screen and (min-width: 768px) and (max-width:1270px){
    width: 4.5px;
    height: 72px;
    top: 194.88px;
    left: 827.75px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    rotate: -30deg;
    position:absolute;
    background: #0A3871;
    top:-238px;
    left:65.3%;
}
@media screen and (min-width: 1270px) {
    width: 4.5px;
    height: 72px;
    top: 194.88px;
    left: 827.75px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    rotate: -30deg;
    position:absolute;
    background: #0A3871;
    top:-238px;
    left:57.9%;
}
`

const Pernadireita = styled.div`
@media screen and (min-width: 200px) and (max-width:768px){
    width: 4.5px;
    height: 35px;
    top: 327.62px;
    left: 827.75px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    rotate: 30deg;
    position:absolute;
    background: #0A3871;
    top:-206.2px;
    left:75.6%;
}
@media screen and (min-width: 768px) and (max-width:1270px){
    width: 4.5px;
    height: 72px;
    top: 327.62px;
    left: 827.75px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    rotate: 30deg;
    position:absolute;
    background: #0A3871;
    top:-112px;
    left:60.6%;
}
@media screen and (min-width: 1270px) {
    width: 4.5px;
    height: 72px;
    top: 327.62px;
    left: 827.75px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    rotate: 30deg;
    position:absolute;
    background: #0A3871;
    top:-112px;
    left:55.25%;
}
`
const Pernaesquerda = styled.div`
@media screen and (min-width: 200px) and (max-width:768px){
    width: 4.5px;
    height: 35px;
    top: 327.62px;
    left: 827.75px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    rotate: -30deg;
    position:absolute;
    background: #0A3871;
    top:-206.2px;
    left:80.3%;
}
@media screen and (min-width: 768px) and (max-width:1270px){
    width: 4.5px;
    height: 72px;
    top: 327.62px;
    left: 827.75px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    rotate: -30deg;
    position:absolute;
    background: #0A3871;
    top:-112px;
    left:65.2%;
}
@media screen and (min-width: 1270px) {
    width: 4.5px;
    height: 72px;
    top: 327.62px;
    left: 827.75px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    rotate: -30deg;
    position:absolute;
    background: #0A3871;
    top:-112px;
    left:57.8%;
}
`

const HANG = [Head, Body, Bracodireito, Bracoesquerdo, Pernadireita, Pernaesquerda]
interface Chutes{
    tentativas : number
}

function Hangman({tentativas,}:Chutes){
    return(
    <div className={styles4.div}>
        {HANG.slice(0,tentativas).map((Bpart,index)=>{return <Bpart key={index}/>})}
        <Corda/>
        <Barra/>
        <Haste/>
        <Base/>
    </div>
    )
    
}

export default Hangman



