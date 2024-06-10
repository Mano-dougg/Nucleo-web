import deleteIcon from "../../public/delete.svg"
import Image from "next/image"

export default function QueueCard() {
    return(
        <div className="queueCard">
            <div className="clientInfo">
                <p className="clientName">Alexandre Shyjada Sousa</p>
                <p className="orderInfo">Total de pães: <span>50 pães</span> Total a pagar: <span>R$ 25,00</span> </p>
            </div>
            <div className="delete">
                <Image 
                    src={deleteIcon}
                    alt = "Ícone de deletar"
                />
            </div>
        </div>
    )
};
