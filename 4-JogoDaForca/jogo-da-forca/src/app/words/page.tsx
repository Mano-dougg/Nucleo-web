'use client';
import { useRouter } from 'next/navigation';
import Button from '../components/Button/Button';
import s from './page.module.css';


export default function Words(){
    const router = useRouter();

    function addWordsOnLocalStorage(): void{
        const textArea = document.querySelector(`.${s.textArea}`) as HTMLInputElement
        let wordsToAdd = textArea.value.split('\n')
        wordsToAdd = wordsToAdd.map(x => x.trim())

        const wordsAlreadyOnStorage = JSON.parse(localStorage.getItem("words") ?? '""')
        let result = wordsToAdd.concat(wordsAlreadyOnStorage)
        result = result.filter(x => x !== '')
        
        localStorage.setItem("words", JSON.stringify(result))

        textArea.value = ""

    }

    return (
        <div className={s.container}>
            <h1>Digite uma palavra</h1>
            <p className={s.description}>Você pode digitar uma palavra por linha para adicionar mais de uma palavra por vez.</p>
            <textarea className={s.textArea}></textarea>
            <div className={s.buttonContainer}>
                <Button text="Adicionar e Iniciar" color="#0A3871" text_color="#fff" onClick={() => {
                    addWordsOnLocalStorage()
                    return router.push('/start')
                }} />
                <Button text="Voltar" color="#fff" text_color="#0A3871" onClick={() => router.push('/')} />
            </div>
        </div>
    );
}