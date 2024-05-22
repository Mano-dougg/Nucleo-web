import './hang.css'
import './body.css'

function Body({ fails }:{fails:number}){
    return(
        <>
         {fails>0 && <div className="body-head body-part"></div>}
         {fails>1 && <div className="body-torso body-part"></div>}
         {fails>2 && <div className="body-left-arm body-part"></div>}
         {fails>3 && <div className="body-right-arm body-part"></div>}
         {fails>4 && <div className="body-left-leg body-part"></div>}
         {fails>5 && <div className="body-right-leg body-part"></div>}
        </>
    )
}

export default function Hang({ fails }:{fails:number}){
    return(
        <div className="hang-container">
            <div className="hang-upper hang-item"></div>
            <div className="hang-pole hang-item"></div>
            <div className="hang-rope hang-item"></div>
            <div className="hang-base hang-item"></div>
            <div className="hang-body hang-item">
                <Body fails={fails} />
            </div>
        </div>
    )
}