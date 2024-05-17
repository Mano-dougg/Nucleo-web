import { useState } from "react";

function menuham(){
    const[menuO,setmenuO] = useState(false)
    const trocar = () => {
        setmenuO =(!menuO)
    }
    {menuO ?
        <p>CABEÇA</p>
    :<></>}
    <button className="btt" onClick={trocar}><img src={icon} className="IC"/></button>
}

export default menuham
