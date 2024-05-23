import style from './Keyboard.module.css'

const keys: string[] = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'
]

function Keyboard() {

    return (
        <>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(5rem, 1fr))', gap: '0.5rem', padding: '0 1rem'}}>
                {keys.map((key, index) => {
                    return <button className={`${style.btn}`} key={index}>
                        {key}
                    </button>
                })}
            </div>
        </>
    )
}

export default Keyboard;