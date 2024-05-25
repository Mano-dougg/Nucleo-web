import './switch.css'

export default function Switch({ onClick }:{onClick:()=>void}){
    return(
        <label className='switch'>
                <input onClick={onClick} type='checkbox' className='switch__checkbox'></input>
                <span className='switch__slider round'></span>
        </label>
    )
}