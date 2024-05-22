import styled from "styled-components"

const Wrapper =  styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    font-size: 6rem;
    text-transform: uppercase;
    font-weight: bold;
    font-family: sans-serif;
    color: #0A3871;
`

interface HangmanWordProps {
    reveal: boolean
    word: string
    guessedLetters: string[]
}


export default function HangmanWord ({
    reveal,
    word, 
    guessedLetters,
}: HangmanWordProps) {
    return (
        <Wrapper>
            {word.split("").map((letter, index) => (
                <span 
                    style={{
                        borderBottom: '0.1em solid #0A3871',
                        minWidth: '50px',
                    }} 
                    key={index}
                >
                    <span 
                        style={{
                            visibility: guessedLetters.includes(letter) || reveal
                                ? 'visible'
                                :'hidden',
                            color: 
                                !guessedLetters.includes(letter) && reveal ? 'red' : '#0A3871'
                        }}
                    >
                        {letter}
                    </span>
                </span>
            ))}
        </Wrapper>
    )
}