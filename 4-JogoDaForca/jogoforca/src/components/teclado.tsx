import styled from 'styled-components';

const Mae = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  width: 600px;
  @media (max-width: 1100px){
    grid-template-columns: repeat(5, 1fr);
    width: 400px;
    column-gap: 0px;
    padding-top: 50px;
    
  }
`;

const Tecla = styled.button<{ clicada: boolean; disabled: boolean }>`
  width: 60px;
  height: 60px;
  color: #000;
  display: flex;
  justify-content: center;
  border: 1px solid #000;
  font-size: 1.2em;
  text-transform: uppercase;
  background-color: ${(p) => (p.clicada ? '#fff' : '#4F1964')};
  opacity: ${(p) => (p.clicada ? '1' : '0.5')};
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  @media (max-width: 1100px){
    width: 20px;
    height: 50px;
    gap: 10px;

  }

`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  @media (max-width: 1100px){
      .tudo{
        overflow: hidden;
        width: 400px;
    }

  }
`;

interface Tecladoargs {
  chutelist: string[];
  adicionarChutes: (letra: string) => void;
  disable?: boolean;
}

export default function Teclado({ chutelist, adicionarChutes, disable = false }: Tecladoargs) {
  const letras = 'abcdefghijklmnopqrstuvwxyz';

  return (
    <Container>
      <Mae className='tudo'>
        {letras.split('').map((letra, id) => (
          <Tecla
            clicada={!chutelist.includes(letra)}
            onClick={() => !disable && adicionarChutes(letra)}
            key={id}
            disabled={disable}
          >
            {letra}
          </Tecla>
        ))}
      </Mae>
    </Container>
  );
}
