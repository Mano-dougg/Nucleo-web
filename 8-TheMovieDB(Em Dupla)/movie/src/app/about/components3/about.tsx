import Image from "next/image"

export default function About(){
    return(
        <>
        <div className="AboutFIlme">
        <div className="IMAGEM">
            <Image src="" alt=""></Image>
        </div>
        <div className="Informacoes">
            <div className="Filme">
                <h1>NOME DO FILME</h1>
                <p>Informações filme</p>
            </div>
        </div>
        </div>  
        </>
    )
}