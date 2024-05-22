import Forca0 from '../assets/forca0.svg'
import Forca1 from '../assets/forca1.svg'
import Forca2 from '../assets/forca2.svg'
import Forca3 from '../assets/forca3.svg'
import Forca4 from '../assets/forca4.svg'
import Forca5 from '../assets/forca5.svg'
import Forca6 from '../assets/forca6.svg'
import React  from 'react'

type DesenhoProps = {
    erros: 0|1|2|3|4|5|6;
}

const DesenhoForca: React.FC<DesenhoProps> = ({erros}) => {
    
    const imagens = [Forca0, Forca1, Forca2, Forca3, Forca4, Forca5, Forca6];

    return (
        <img src={imagens[erros]} alt={`Forca contando ${erros} erros de 6`} />
    );
}

export default DesenhoForca;