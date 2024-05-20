"use client";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

export default function OptionsButton() {
    const router = useRouter();
    const { data: session, status } = useSession();
    return (
        <>
            <Button
                text="Iniciar"
                color="#0A3871"
                onClick={() => router.push("/start")}
                text_color="#fff"
            />
            <Button
                text="Adicionar Palavra"
                color="#fff"
                onClick={() => router.push("/words")}
                text_color="#0A3871"
            />
            <Button
                text="Verificar Palavras"
                color="#fff"
                onClick={() => router.push("/words/modify")}
                text_color="#0A3871"
            />
            {status === "loading" ? (
                ""
            ) : session ? (
                <Button
                    text="Logout"
                    color="#fff"
                    onClick={() => signOut()}
                    text_color="#0A3871"
                />
            ) : (
                <Button
                    text="Login"
                    color="#fff"
                    onClick={() => signIn()}
                    text_color="#0A3871"
                />
            )}
        </>
    );
}
