import Foto1 from '../assets/imagem1.jpg'
import Foto2 from '../assets/imagem2.png'


function Galeria() {
    return (
        <div className="galeria">
            <h2>Title</h2>
            <p>
            Line of copy in here to decribe this section. Line of copy in here to decribe this section.
            Line of copy in here to decribe this section. Line of copy in here to decribe this section.
            </p>
            <div className="galeriaItem">
            <div><img src={Foto1} /></div>
                <div>
                    <h3>Title</h3>
                    <p>
                    Leading, implementing and evolving engaging customer experiences
                    and UI foundations for every touch-point across various platforms.
                    </p>
                    <button>Button Primary Light</button>
                </div>
            </div>
            <div className="galeriaItem" style={{flexDirection: "row-reverse"}}>
                <div><img src={Foto2} /></div>
                <div>
                    <h3>Title</h3>
                    <p>
                    Leading, implementing and evolving engaging customer experiences
                    and UI foundations for every touch-point across various platforms.
                    </p>
                    <button>Button Primary Light</button>
                </div>
            </div>
        </div>
    );
}

export default Galeria;