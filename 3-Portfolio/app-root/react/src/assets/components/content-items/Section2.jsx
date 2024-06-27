import "./../../css-files/content-styles/Section2.css"
import img1 from "./../../images/section-img-1.jpg"
import img2 from "./../../images/section-img-2.jpg"

export default function Section2(){
    return(
        <>
        <div className="section2">
            <h3>Title</h3>
            <p>Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section.</p>
            <div className="post1">
                <img className="postimg" src={img1} />
                <div className="text">
                    <h4>Title</h4>
                    <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                    <button>Button Primary Color</button>
                </div>
            </div>
            <div className="post2">
                <img className="postimg" src={img2} />
                <div className="text">
                    <h4>Title</h4>
                    <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                    <button> Button Primary Color</button>
                </div>
            </div>
        </div>
        </>
    )
}