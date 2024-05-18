type ContentProps = {
    classe: string
}

function Content(props: ContentProps) {
    return (
        <div className="content">
        <h1 className={props.classe}>Teste conteudo</h1>
        </div>
    )
}

export default Content;