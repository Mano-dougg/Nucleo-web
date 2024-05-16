import "./../../css-files/content-styles/Callout.css"
import chekit from "./../../icons/chekit-icon.png"
export default function Callout(){
    return(
        <div className="callout">
            <img className='checkmark' src={chekit} alt="checkmate" />
            <p>Available for work and general design goodness.<strong>Say hello!</strong></p>
        </div>
    )
}