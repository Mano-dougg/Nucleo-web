import Image from "next/image";
const Header = () => {
    return(
        <div className="header" style={{display:"flex"}}>
            <h1><span className="AI">AI</span><i>Today</i></h1>
            <div className="entrada" style={{display:"flex"}}>
                <textarea id="pesquisa" defaultValue={"Pesquisar"}/>
                <Image
                    src="/lupa.svg"
                    alt="lupa"
                    width={100}
                    height={24}
                />
            </div>
        </div>
    )
}
export default Header;