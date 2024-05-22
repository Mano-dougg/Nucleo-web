import styled from 'styled-components';

const KEYS = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const Teclado = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
    gap: .5rem;
`;

export default function Keyboard() {
    return (
        <Teclado>
            {KEYS.map(key => (
                <button className="botaozinho" key={key}>{key}</button>
            ))}
        </Teclado>
    );
}
