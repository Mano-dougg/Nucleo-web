'use client';
import { useSession } from 'next-auth/react';
import Hangman from '../components/Hangman/Hangman'
import s from './page.module.css'
import { useEffect, useState } from 'react';
import Match from '../components/Match/Match';


interface match{
    id: string,
    isWinner: boolean,
    createdAt: string,
    word: string,
}

export default function Start(){
    const { data: session } = useSession()
    const [matches, setMatches] = useState<match[]>([])

    useEffect(() => {
        async function getAllMatches(){
            const response = await fetch(`/api/match/get/all/${session?.user.id}`,{
                method: 'GET',
            })
            const data = await response.json()
            setMatches(data.message)
        }

        function getAllMatchesFromLocalStorage(){
            const data = localStorage.getItem('matches')
            if(data){
                let parsedData = JSON.parse(data)
                parsedData.sort((a:match, b:match) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
                setMatches(parsedData)
            }
        }

        if(session){
            getAllMatches()
        }else{
            getAllMatchesFromLocalStorage()
        }
    }, [])
    return(
        <div className={s.container}>
            <div className={s.history}>
                <p>Histórico de partidas</p>
                {matches.length > 0 &&
                    <>
                        <p>Vitórias: {
                            matches?.filter((match) => match.isWinner).length
                        }</p>
                        <p>Derrotas: {
                            matches?.filter((match) => !match.isWinner).length
                        }</p>
                    </>
                }
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