import Image from "next/image"
import logoImage from '../../public/Logo.svg'
export default function Logo() {
    return(
        <Image
            src={logoImage}
            alt="Imagem da Logo"
            height={113}
            width={155}
        />
    )
};
