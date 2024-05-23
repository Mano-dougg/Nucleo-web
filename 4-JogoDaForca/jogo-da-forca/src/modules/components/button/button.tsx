import { Link } from 'react-router-dom'
import './button.css'

function LinkType({ color, Click, content, clickable }:{color:string, Click:string, content:string, clickable:boolean}){
    return(
        <Link className={'button ' + color} to={clickable?Click:''}>{content}</Link>
    )
}

function ButtonType({ color, Click, content, clickable }:{color:string, Click:()=>void, content:string, clickable:boolean}){
    return(
        <button className={'button ' + color} onClick={clickable?Click:(()=>{})}>
            {content}
        </button>
    )    
}


export default function Button({ behavior, color, Click=()=>{}, routeCoordinates='/', content, clickable }:{behavior:'link'|'button', color:string, Click?:(()=>void), routeCoordinates?:string, content:string, clickable:boolean}){
    return(
        <>
            {behavior==='link'?
                <LinkType color={color} Click={routeCoordinates} content={content} clickable={clickable} />
                :<ButtonType color={color} Click={Click} content={content} clickable={clickable} />
            }
        </>
    )
}