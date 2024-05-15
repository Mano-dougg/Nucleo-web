import LinkSection from "./nav-items/LinkSection"
import IconSection from "./nav-items/IconSection"
import './../css-files/Desktop.css'

export  default function Desktop () {
    return(
    <div className="container">
        <div className="nav">
            <div className="left-nav"> 
                <h1 className="name">Cristiano Santos</h1>
                <LinkSection/>
            </div>
            <div className="right-nav">
                <IconSection/>
                <div>
                    <button>Botão</button>
                </div>
            </div>
        </div> 
        <div>

        </div>
    </div>
    ) 
}
