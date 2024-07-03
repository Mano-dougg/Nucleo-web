import React, { useState } from "react"
import Header from "./components/Header"
import {Link, useNavigate} from "react-router-dom"
import { usaApp } from "./components/context"

const removeAcentos = (str: string): string => {
    const salvaCedilha = str.replace(/ç/g, '##C_C##')
    const normalizado = salvaCedilha.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    const retornaCedilha = normalizado.replace(/##C_C##/g, "ç")
    return retornaCedilha
}

const InputPalavras: React.FC = () => {
    const {setPalavra} = usaApp()
    const [valorInput, setValorInput] = useState("")
    const navegar = useNavigate()
    const caracteresPermitidos = /^[a-zç ]*$/;
    const mudarInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valorBruto = e.target.value
        const valorPadronizado = removeAcentos(valorBruto).toLowerCase()
        if (caracteresPermitidos.test(valorPadronizado)) setValorInput(valorPadronizado)
    }

    const salvar = () => {
        if (valorInput.length >= 4 && valorInput.length <= 10) {
            setPalavra(valorInput)
            navegar("/jogo")
        } else {
            alert("Ei! A palavra ou frase deve ter entre 4 e 10 caracteres!")
        }
    }

    return (
        <>
            <Header />
            <main>
                <h1>Digite uma palavra ou frase curta</h1>
                <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
                    <input
                    type="text"
                    minLength={4}
                    maxLength={10}
                    className="input"
                    value={valorInput}
                    onChange={mudarInput} />
                    <p>
                        Nota: <br />
                        Comprimento total deve ser entre 4 e 10.
                        <br />Acentos não serão registrados.
                    </p>
                </div>
                <div className="doisBotoes">
                        <button className="botaozao botaoPrim" onClick={salvar}>
                            Salvar e começar
                        </button>
                    <Link to="/">
                        <button className="botaozao botaoSec">
                            Cancelar
                        </button>
                    </Link>
                </div>
            </main>
        </>
    )
}
export default InputPalavras