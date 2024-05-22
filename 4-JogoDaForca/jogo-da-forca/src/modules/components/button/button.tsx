import { Link } from 'react-router-dom'
import './button.css'

function LinkType({ color, Click, content }:{color:string, Click:string, content:string}){
    return(
        <Link className={'button ' + color} to={Click}>{content}</Link>
    )
}

function ButtonType({ color, Click, content }:{color:string, Click:()=>void, content:string}){
    return(
        <button className={'button ' + color} onClick={Click}>
            {content}
        </button>
    )    
}


export default function Button({ behavior, color, Click=()=>{}, routeCoordinates='/', content }:{behavior:'link'|'button', color:string, Click?:(()=>void), routeCoordinates?:string, content:string}){
    return(
        <>
            {behavior==='link'?
                <LinkType color={color} Click={routeCoordinates} content={content} />
                :<ButtonType color={color} Click={Click} content={content} />
            }
        </>
    )
}