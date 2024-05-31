import Logo from "./Logo";

export default function Header() {

    return (
        <>
            <header>
                <div className="logoContainer">
                    <Logo/>
                </div>
                <div className="searchContainer">
                    <input type="text" placeholder="Pesquise..." />
                </div>
            </header>
            
        </>
    )

};
