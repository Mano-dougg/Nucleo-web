import deleteIcon from "../../public/delete.svg"
import Image from "next/image"

interface QueueCardProps {
    clientName: string;
    totalBread: string; 
    toPay: string; 
}

export default function QueueCard({clientName, totalBread, toPay} : QueueCardProps) {
    return(
        <div className="queueCard">
            <div className="clientInfo">
                <p className="clientName">{clientName}</p>
                <p className="orderInfo">Total de pães: <span>{totalBread}</span> Total a pagar: <span>{toPay}</span> </p>
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
