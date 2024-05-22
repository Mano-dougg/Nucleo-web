import { Container, Button } from "./teclado";

const Letras = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

export default function Teclado(){
    return(
        <Container>
            {Letras.map((letter) => (
                <Button isActive={true} key={letter}>
                    {letter}
                </Button>
            ))}
        </Container>



    )
}