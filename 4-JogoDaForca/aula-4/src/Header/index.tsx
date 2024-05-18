type HeaderProps = {
    mudaClasse: (cor: string) => void
    classe: string
}

function Header (props: HeaderProps) {
    return (
        <>
            <div className="header">
                <h1>Logo</h1>
                <button onClick={() => props.mudaClasse(props.classe == 'blue' ? 'black' : 'blue')}>mudar cor</button>
            </div>
        </>
    )
}

export default Header;