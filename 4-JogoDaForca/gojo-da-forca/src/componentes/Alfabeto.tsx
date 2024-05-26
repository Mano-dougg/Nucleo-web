import styled from "styled-components"

const letras = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'ç',
]

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
  gap: 0.3rem;
  width: inherit;
`
const Botao = styled.button<{ isActive: boolean }>`
  opacity: ${(p) => p.isActive ? 'null': '0.3'};

  &:focus:disabled {
    outline: none;
    border-color: transparent;
    cursor: not-allowed;
  }

  &:focus-visible:disabled {
    outline: none;
    border-color: transparent;
    cursor: not-allowed;
  }

  &:hover:disabled {
    outline: none;
    border-color: transparent;
    cursor: not-allowed;
  }
`
type AlfabetoProps = {
  disabled?: boolean
  letraAtiva: string[]
  letraInativa: string[]
  adicionaLetraAdivinhada: (letra: string) => void
}

export default function Alfabeto( { letraAtiva, letraInativa, adicionaLetraAdivinhada, disabled = false}: AlfabetoProps ) {

  return (
    <Wrapper>
      {letras.map(letra => {
          const isActive = !letraAtiva.includes(letra)
          const isInactive = !letraInativa.includes(letra)
        return (
          <Botao 
            isActive={isActive && isInactive && !disabled} 
            key={letra} 
            onClick={() => adicionaLetraAdivinhada(letra)}
          > 
              {letra.toUpperCase()}
          </Botao>)
      })}
    </Wrapper>
  )
}
