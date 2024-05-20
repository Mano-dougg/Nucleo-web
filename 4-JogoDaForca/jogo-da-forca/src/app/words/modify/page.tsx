'use client';
import { useState } from 'react'
import s from './page.module.css'
import Button from '@/app/components/Button/Button';
import { useRouter } from 'next/navigation';

export default function Modify(){
    const [words, setWords] = useState<string[]>(JSON.parse(localStorage.getItem("words") ?? '""'))

    function deleteWord(word: string):void{
        const filteredWords = words.filter((element)=> element !== word)
        localStorage.setItem("words", JSON.stringify(filteredWords) )
        setWords(filteredWords)
    }

    const router = useRouter()

    return(
        <div className={s.container}>
            <div className="listSavedWords">
                {words && words.map((word)=>{
                    return(
                        <div>
                            {word}
                            <button onClick={()=> deleteWord(word)}>Excluir</button>
                        </div>
                    )
                })}
                {!words && 
                <div>
                    <h1>Não há palavras no momento</h1>
                    <Button text="Adicione aqui" color="#0A3871" text_color="#fff" onClick={() => router.push('/words')} />
                </div>
                }
            </div>
        </div>
    )
}