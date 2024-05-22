import styled from "styled-components"


const Base = styled.div`
    height: 10px;
    width: 250px;
    background: #0A3871;
    justify-content: center;
`
const VerticalLine = styled.div`
    height: 250px;
    width: 10px;
    background: #0A3871;
    margin-left: 60px;
`
const HorizontalLine = styled.div`
    height:10px;
    width: 140px;
    background: #0A3871;
    position: absolute;
    right: 40px;
    top: 0;
`
const VerticalLineSmall = styled.div`
    height: 40px;
    width: 10px;
    background: #0A3871;
    margin-left: 150px;
    position: absolute;
    right: 40px;
    top: 0;
`
const Head = styled.div`
    height: 30px;
    width: 30px;
    border: 8px solid #0A3871;
    border-radius: 50%;
    position: absolute;
    right: 22px;
    top: 35px;
`
const Body = styled.div`
    height: 80px;
    width: 10px;
    position: absolute;
    background: #0A3871;
    right: 40px;
    top: 75px;
`
const RightArm = styled.div`
    height: 10px;
    width: 40px;
    position: absolute;
    background: #0A3871;
    right: 10px;
    top: 90px;
    rotate: 30deg;
`
const LeftArm = styled.div`
    height: 10px;
    width: 40px;
    position: absolute;
    background: #0A3871;
    right: 40px;
    top: 90px;
    rotate: -30deg;
`
const RightLeg = styled.div`
    height: 10px;
    width: 40px;
    position: absolute;
    background: #0A3871;
    right: 10px;
    top: 157px;
    rotate: 30deg;
`
const LeftLeg = styled.div`
    height: 10px;
    width: 40px;
    position: absolute;
    background: #0A3871;
    right: 40px;
    top: 157px;
    rotate: -30deg;
`
const bodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg]

interface HangmanDrawingProps{
    numberOfGuesses: number
}

export default function HangmanDrawing ({
    numberOfGuesses,
}: HangmanDrawingProps) {
    return(
        <div 
            style={{
                position: 'relative'
            }}
        >
            {bodyParts.slice(0, numberOfGuesses).map((BodyParty, index) => {
                return <BodyParty key={index} />
            })}
            <VerticalLineSmall />
            <HorizontalLine />
            <VerticalLine />
            <Base />
        </div>
    )
}