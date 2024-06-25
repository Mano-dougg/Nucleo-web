import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

//-- Styled Components
const ContainerForms = styled.div`
  display: flex;
  justify-self: center;
  flex-direction: column;
  justify-content: space-between;
  width: 24rem;
  height: 24rem;
  padding: 1rem 1.5rem;
  gap: 3.75rem;
  position: sticky;
  top: 5rem;
  background-color: hsl(0, 0%, 100%);
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px hsla(0, 0%, 0%, 0.1), 0 4px 6px -4px hsla(0, 0%, 0%, 0.1);
  color: hsl(31, 90%, 20%);
`;

const FormsHead = styled.h3`
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const Forms = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputForms = styled.input`
  width: auto;
  height: 50px;
  padding: 0 1rem;
  border-radius: 0.5rem;
  border: hidden;
  background-color: hsla(0, 0%, 96%, 1);
  font-size: 1rem;
`;

const BotaoForms = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48%;
  height: 60px;
  background-color: hsl(31, 69%, 35%);
  border: hidden;
  border-radius: 0.5rem;
  color: hsl(0, 0%, 100%);
  font-size: 1rem;

  &.cancelar {
    background-color: transparent;
    border: 2px solid hsl(0, 76%, 49%);
    color: hsl(0, 76%, 49%);
  }
`;

//-- Tipagens
interface Props {
  fechar: () => void;
  gatilho: () => void;
}

//-- Componente Formulario
const Formulario: React.FC<Props> = ({ fechar, gatilho }) => {
  const [nome, setNomeCliente] = useState<string>("");
  const [paes, setPaes] = useState<number>(0);

  const fNomeCliente = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNomeCliente(e.target.value);
  };

  const fPaes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numPaes = parseInt(e.target.value, 10);
    setPaes(numPaes);
  };

  axios.get

  const enviarFormulario = (e: React.FormEvent) => {
    e.preventDefault();
    const DadosFormulario = {
      nome,
      paes,
      dinheiros: paes * 0.5,
    };
    axios.post('http://localhost:1080/novoCliente', DadosFormulario)
      .then(response => {
        console.log(response.data.message);
      })
      .catch(error => {
        console.error('Erro ao enviar os dados:', error);
        alert('Erro ao enviar os dados');
      });
    gatilho();
    fechar();
  };

  return (
    <ContainerForms>
      <div>
        <FormsHead>Adicionar pessoa à fila</FormsHead>
        
        <Forms id="forms" method="post" onSubmit={enviarFormulario}>
          <InputForms type="text" name="cliente" value={nome} onChange={fNomeCliente} placeholder="Nome completo do cliente" />
          <InputForms type="number" name="cliente" value={paes} onChange={fPaes} placeholder="Total de pães" />
        </Forms>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <BotaoForms type="submit" form="forms">
          Enviar
        </BotaoForms>

        <BotaoForms className="cancelar" onClick={fechar}>
          Cancelar
        </BotaoForms>
      </div>
    </ContainerForms>
  );
};

export default Formulario;