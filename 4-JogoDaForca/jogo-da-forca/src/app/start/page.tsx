'use client';
import { useSession } from 'next-auth/react';
import Hangman from '../components/Hangman/Hangman'
import s from './page.module.css'
import { useEffect, useState } from 'react';
import Match from '../components/Match/Match';


interface matches{
    id: string,
    isWinner: boolean,
    createdAt: string,
    word: string,
}

export default function Start(){
    const { data: session } = useSession()
    const [matches, setMatches] = useState<matches[]>([])

    useEffect(() => {
        async function getAllMatches(){
            const response = await fetch(`/api/match/get/all/${session?.user.id}`,{
                method: 'GET',
            })
            const data = await response.json()
            setMatches(data.message)
        }
        if(session){
            getAllMatches()
        }
    }, [])
    return(
        <div className={s.container}>
            <div className={s.history}>
                <p>Histórico de partidas</p>
                <div className={s.matches}>
                    {matches.map((match) => {
                        return(
                            <Match key={match.id} match={match}/>
                        )
                    })}
                </div>
            </div>
            <Hangman/>
        </div>
    )
}