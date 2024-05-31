import './slider.css'

export default function Slider(){
    return(
        <div className='main'>
            <div className='wrapper'>
                <div className='container'>
                    <input type='radio' name="slide" id="c1"/>
                    <label htmlFor="c1" className='card'>
                        <div className="row">
                            <div className='icon'>1</div>
                            <div className='description'>
                                <h1>SilkSong Anunciado!</h1>
                                <p>O sucessor de Hollow Knight está cada dia mais próximo.</p>
                            </div>
                        </div>
                    </label>

                    <input type='radio' name="slide" id="c2" />
                    <label htmlFor="c2" className='card'>
                        <div className="row">
                            <div className='icon'>2</div>
                            <div className='description'>
                                <h1>Novo Filme do Predador?</h1>
                                <p>O maior caçador dos cinemas está de volta</p>
                            </div>
                        </div>
                    </label>

                    <input type='radio' name="slide" id="c3"  />
                    <label htmlFor="c3" className='card'>
                        <div className="row">
                            <div className='icon'>3</div>
                            <div className='description'>
                                <h1>O gigante está vindo para as telinhas.</h1>
                                <p>Godzilla Minus One está chegando aos streamers em breve.</p>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    )
}