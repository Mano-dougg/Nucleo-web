'use client';
import Hangman from '../components/Hangman/Hangman'
import s from './page.module.css'

export default function Start(){
    return(
        <div className={s.container}>
            <Hangman/>
        </div>
    )
}