import { ReactNode, createContext, useContext, useState } from "react";

type ContextoProps = {
    palavra: string;
    setPalavra:  React.Dispatch<React.SetStateAction<string>>;
    vitorias: number;
    setVitorias: React.Dispatch<React.SetStateAction<number>>;
    derrotas: number;
    setDerrotas: React.Dispatch<React.SetStateAction<number>>;
}

const Contexto = createContext<ContextoProps | undefined>(undefined);

const Provedor: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [palavra, setPalavra] = useState<string>("exemplando");
    const [vitorias, setVitorias] = useState<number>(0);
    const [derrotas, setDerrotas] = useState<number>(0);

    return (
        <Contexto.Provider value={{palavra, setPalavra, vitorias, setVitorias, derrotas, setDerrotas}}>
            {children}
        </Contexto.Provider>
    )
}

const usaApp = () => {
    const contexto = useContext(Contexto)
    if (!contexto) {
        throw new Error("usaApp deve ser utilizado dentro de um Provedor")
    }
    return contexto
}

export {Provedor, usaApp}