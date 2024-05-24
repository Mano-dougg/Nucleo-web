import { styled } from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: bold;
    font-family: 'Inter', sans-serif;

`

interface HangmanWordProps {
    word:string;
    guessedLetters:string[]

}

export default function HangmanWord( {
    revelar,
    word,
     guessedLetters,
     } : HangmanWordProps ) {

    return <Wrapper>
        {word.split("").map((letter, index) => (
            <span
                style={{ borderBottom: '0.1em solid white',
                    height: '80px' ,
                    minWidth: '50px', 
                 }}
                key={index}>
                <span style={{ visibility: guessedLetters.includes(letter) || revelar
                     ? 'visible'
                      : 'hidden',
                      color:!guessedLetters.includes(letter) && 'red'
                      }}>{letter}</span>
            </span>
        ))}
    </Wrapper>
}