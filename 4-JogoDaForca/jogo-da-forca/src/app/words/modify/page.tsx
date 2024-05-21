"use client";
import { useEffect, useState } from "react";
import s from "./page.module.css";
import Button from "@/app/components/Button/Button";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

type wordType = string | { word: string; id: string };

export default function Modify() {
    const [words, setWords] = useState<string[]>(
        JSON.parse(localStorage.getItem("words") ?? '""')
    );
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        async function getDBWords() {
            try {
                const response = await fetch(`/api/words/${session?.user?.id}`);
                const responseJson = await response.json();

                setWords(responseJson.message);
            } catch (e) {
                console.log("An error occurred when fetch words", e);
            }
        }
        if (session) {
            setWords([]);
            getDBWords();
        }
    }, [session]);

    function deleteWord(word: string): void {
        const filteredWords = words.filter((element) => element !== word);
        localStorage.setItem("words", JSON.stringify(filteredWords));
        setWords(filteredWords);
    }

    async function deleteWordById(id: string): Promise<void> {
        const response = await fetch("/api/words", {
            method: "post",
            body: JSON.stringify({
                id,
            }),
        });
        const responseJson = await response.json();
        if (responseJson.message === "success") {
            const filteredWords = words.filter((element: wordType) => {
                if (typeof element === "string") {
                    return true; // or false, depending on what you want to do with strings
                } else {
                    return element.id !== id;
                }
            });
            setWords(filteredWords);
        }
    }

    return (
        <div className={s.container}>
            <h1>Palavras salvas</h1>
            <div className={s.listSavedWords}>
                {words &&
                    words.map((word: wordType) => {
                        if (typeof word === "string") {
                            return (
                                <div className={s.wordDiv}>
                                    {session ? word : word}
                                    <button onClick={() => deleteWord(word)}>
                                        Excluir
                                    </button>
                                </div>
                            );
                        } else {
                            return (
                                <div key={word.id} className={s.wordDiv}>
                                    {session ? word.word : word.word}
                                    <button
                                        onClick={() => deleteWordById(word.id)}
                                    >
                                        Excluir
                                    </button>
                                </div>
                            );
                        }
                    })}
                {(!words || words.length == 0) && (
                    <div>
                        <h1>Não há palavras no momento</h1>
                        <Button
                            text="Adicione aqui"
                            color="#0A3871"
                            text_color="#fff"
                            onClick={() => router.push("/words/add")}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
