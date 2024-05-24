import { useState, useEffect, useRef } from "react";
import s from "./Hangman.module.css";
import Keyboard from '../Keyboard/Keyboard'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function Hangman() {
    const [word, setWord] = useState("");
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [wrongGuesses, setWrongGuesses] = useState(0);
    const [matchId, setMatchId] = useState<string>('')
    const hasRun = useRef<boolean>(false);
    const maxWrongGuesses = 6;
    const { data: session } = useSession();
    const router = useRouter()
    
    interface Match{
        id: string,
        isWinner: boolean,
        createdAt: string,
        word: string,
    }


    useEffect(() => {
        
        if(!session){
            const words = JSON.parse(localStorage.getItem("words") ?? '""');
            const randomWord = words[Math.floor(Math.random() * words.length)];
            setWord(randomWord);
        }

    }, []);

    useEffect(() => {
        async function createMatchFromLocalStorage(){
            let data:Match[] = await JSON.parse(localStorage.getItem('matches') ?? '[]')
            const match = {
                word: word,
                createdAt: new Date().toISOString(),
                id: Math.random().toString(36),
                isWinner: false
            }
            data = [...data, match]
            localStorage.setItem('matches', JSON.stringify(data))
            setMatchId(match.id)
        }

        if(!session && !hasRun.current && word){
            createMatchFromLocalStorage()
            hasRun.current = true;
        }
    }, [word])

    useEffect(() => {
        async function getDBWords() {
            try {
                const response = await fetch(`/api/words/${session?.user?.id}`);
                const responseJson = await response.json();
                const randomWord = responseJson.message[Math.floor(Math.random() * responseJson.message.length)];
                setWord(randomWord.word);
                createMatch(randomWord.word);
            } catch (e) {
                console.log("An error occurred when fetch words", e);
            }
        }

        async function createMatch(selectedWord: string){
            const response = await fetch('/api/match/create',{
                method:'post',
                body: JSON.stringify({
                    word: selectedWord,
                    userId: session?.user.id
                })
            })
            const data = await response.json()
            setMatchId(data.data)
        }

        if (session && !hasRun.current) {
            getDBWords();
            hasRun.current = true;
        }
    }, []);


    const renderWord = () => {
        return word.split("").map((letter, index) => (
            <span key={index} className={s.letter}>
                {guessedLetters.includes(letter) ? letter.toUpperCase() : "_"}
            </span>
        ));
    };

    const isGameOver = wrongGuesses >= maxWrongGuesses;
    const isGameWon = word && word.split("").every((letter) => guessedLetters.includes(letter));

    useEffect(()=>{
        async function updateMatch(){
            const response = await fetch('/api/match/update',{
                method:'post',
                body: JSON.stringify({
                    isWinner: isGameWon,
                    matchId,
                    isFinished: true
                })
            })
        }

        function updateMatchFromLocalStorage(){
            const data:Match[] = JSON.parse(localStorage.getItem('matches') ?? '[]')
            const response = data.map((match) => {
                if(match.id === matchId){
                    return {...match, isWinner: isGameWon}
                }
                return match
            })
            localStorage.setItem('matches', JSON.stringify(response))
        }

        if(session){
            if(isGameWon || isGameOver) updateMatch()
            
        }else{
            if(isGameWon || isGameOver) updateMatchFromLocalStorage()
        }
    },[isGameOver, isGameWon])

    return (
        <div className={s.container}>
            <h1>Jogo da Forca</h1>
            <div className={s.hangmanContainer}>
                <div className={s.hangman}>
                    <div className={s.base} />
                    <div className={s.pole} />
                    <div className={s.beam} />
                    <div className={s.rope} />
                    {wrongGuesses > 0 && <div className={s.head} />}
                    {wrongGuesses > 1 && <div className={s.body} />}
                    {wrongGuesses > 2 && <div className={s.arm1} />}
                    {wrongGuesses > 3 && <div className={s.arm2} />}
                    {wrongGuesses > 4 && <div className={s.leg1} />}
                    {wrongGuesses > 5 && <div className={s.leg2} />}
                </div>
            </div>
            <div className={s.wordContainer}>{renderWord()}</div>
            <div className={s.alphabetContainer}>{
                <Keyboard word={word} 
                guessedLetters={guessedLetters} 
                setGuessedLetters={setGuessedLetters} 
                setWrongGuesses={setWrongGuesses} 
                wrongGuesses={wrongGuesses}
                />
            }</div>
            {isGameOver && (
                <div className={s.message}>
                    Você perdeu! A palavra era: {word}
                </div>
            )}
            {isGameWon && <div className={s.message}>Você ganhou!</div>}
            <div className={s.buttonsContainer}>
                <button
                    className={s.newGameButton}
                    onClick={() => router.push('/')}
                >
                    Novo jogo
                </button>
                <button
                    className={s.giveUpButton}
                    onClick={() => setWrongGuesses(maxWrongGuesses)}
                >
                    Desistir
                </button>
            </div>
        </div>
    );
}
