import img1 from '../../../../public/img/Main/SectionImgs/plantcard.png'
import img2 from '../../../../public/img/Main/SectionImgs/welovedogs.png'
import './style.css'

export default function Section(){
    return(
        <section>
            <hr className="row"/>
            <h1 className="section_title">Title</h1>
            <p className="section_primary-text">Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. </p>
            <div className="Subsection_left Subsection">
                <img src={img1} alt="" className="Subsection_img" />
                <div className="Subsection_text">
                    <h2>Title</h2>
                    <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                    <a className='gray-bg subsection-btn'>Button Primary Light</a>
                </div>
            </div>
            <div className="Subsection_right Subsection">
            <img src={img2} alt="" className="Subsection_img" />
                <div className="Subsection_text">
                    <h2>Title</h2>
                    <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
                    <a className='gray-bg subsection-btn'>Button Primary Light</a>
                </div>
            </div>
        </section>
    )
}