import { useTheme } from '@/context/theme-context'
import './switch.css'

export default function Switch(){
    
    const { toggleTheme } = useTheme()

    return(
        <label className='switch'>
                <input onClick={toggleTheme} type='checkbox' className='switch__checkbox'></input>
                <span className='switch__slider round'></span>
        </label>
    )
}