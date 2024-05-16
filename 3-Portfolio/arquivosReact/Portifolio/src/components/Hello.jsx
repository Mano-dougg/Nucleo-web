import Check from '../assets/Check.svg'

function Hello(props) {
    const{nome}=props;
    return (
        <>
            <h1>Hello.<br />My name is {nome}.</h1>
            <div className="linhaCurta"></div>
            <p>
                I'm a Digital Product and UI Designer – creating digital experiences that
                are intuitive for real people and making complex processes easy to use.
                <br /><br />
                Right now, I'm Design Lead at Holiday Extras, covering all our digital
                platforms across a whole load of brands – leading a great team across design,
                UI engineering, accessibility and customer experience. I'm lucky to be part
                of a great team of designers, writers, engineers, PMs and data specialists –
                amongst others – testing, iterating and optimising our platforms and products.
                <br /><br />
                I've got some work on Dribbble, some previous work at Saga and you can find me
                over on twitter and sometimes on Medium too. I also take too many photos.
            </p>
            <div>
                <img src={Check} />
                <p>Available for work and general design goodness – say hello</p>
            </div>
        </>
    );
}

export default Hello;