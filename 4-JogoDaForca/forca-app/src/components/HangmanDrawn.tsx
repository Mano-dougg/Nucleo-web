import './HangmanDrawn.css';

const Head = (
    <div style={{ width: '4rem', height: '4rem', position: 'absolute', border: '0.5rem solid var(--dark-blue)', borderRadius: '100%', top: '3rem', right: '-0.1rem'}} />
)

const Body = (
    <div style={{ width: '0.5rem', height: '10rem', position: 'absolute', backgroundColor: 'var(--dark-blue)', top: '7rem', right: '1.5rem'}} />
)

const rightArmy = (
    <div style={{width: '0.5rem', height: '4rem', backgroundColor: 'var(--dark-blue)', position: 'absolute', top: '7.3rem', right: '2.7rem', rotate: '35deg'}} />
)

const leftArmy = (
    <div style={{width: '0.5rem', height: '4rem', backgroundColor: 'var(--dark-blue)', position: 'absolute', top: '7.3rem', right: '0.3rem', rotate: '-35deg'}} />
)

const rightLeg = (
    <div style={{width: '0.5rem', height: '4rem', backgroundColor: 'var(--dark-blue)', position: 'absolute', top: '16.5rem', right: '2.6rem', rotate: '35deg'}} />
)

const leftLeg = (
    <div style={{width: '0.5rem', height: '4rem', backgroundColor: 'var(--dark-blue)', position: 'absolute', top: '16.6rem', right: '0.3rem', rotate: '-35deg'}} />
)

function HangmanDrawn() {

    return (
        <div style={{position: 'relative'}}>
            {Head}
            {Body}
            {rightArmy}
            {leftArmy}
            {rightLeg}
            {leftLeg} 

            <div className="side-bar"></div>

            <div className="up-bar"></div>

            <div className="vertical-bar"></div>

            <div className="down-bar"></div>
        </div>
    )
}

export default HangmanDrawn;