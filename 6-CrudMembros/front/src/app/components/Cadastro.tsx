import '../globals.css';
import React, { useState } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useModal } from '../contexts/ModalContexts';
import { criarUsuario } from '../services/api';

interface CadastroProps {
  className?: string;
}
//-- FUNCTION
export default function Cadastro({className}: CadastroProps) {
  const { toggleModalUm } = useModal();
  const [nome, setNome] = useState<string>('');
  // function fNome(e: any) {
  //   setNome(e.target.value);
  // };
  const [email, setEmail] = useState<string>('');
  // function fEmail(e: any) {
  //   setEmail(e.target.value);
  // };
  const [senha, setSenha] = useState<string>('');
  // function fSenha(e: any) {
  //   setSenha(e.target.value);
  // };
  const [idade, setIdade] = useState<number>(0);
  // function fIdade(e: any) {
  //   setIdade(e.target.value);
  // };
  const [cidade, setCidade] = useState<string>('');
  // function fCidade(e: any) {
  //   setCidade(e.target.value);
  // };
  const [estado, setEstado] = useState<string>('');
  // function fEstado(e: any) {
  //   setEstado(e.target.value);
  // };

  const fFormulario = (setter: React.Dispatch<React.SetStateAction<any>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
  };

  const fCriar = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await criarUsuario({ email, senha, nome, idade, cidade, estado });
      alert('Usuario criado com sucesso!');
      toggleModalUm();
    } catch (error) {
      console.error('Erro ao enviar os dados: ', error);
    }
  };

  return (

    <section id='cadastro' className={clsx('efeito-modal', className )} >
      <div className='container-modal'>
        <h2 className='titulo-modal'>Cadastrar usuário</h2>
        
        <form className='form-modal' method="post">
          <label htmlFor='nome' className='form-label col-span-5'>
            Nome :
            <input id='nome' className='form-input' onChange={fFormulario(setNome)}/>
          </label>

          <label htmlFor='idade' className='col-span-2 form-label'>
            Idade :
            <input id='idade' className='form-input' onChange={fFormulario(setIdade)}/>
          </label>

          <label htmlFor='email' className='col-span-7 form-label'>
            E-mail :
            <input id='email' className='form-input'onChange={fFormulario(setEmail)}/>
          </label>
          <label htmlFor='senha' className='col-span-7 form-label'>
            Senha :
            <input id='senha' className='form-input' onChange={fFormulario(setSenha)}/>
          </label>

          <label htmlFor='cidade' className='col-span-4 form-label'>
            Cidade :
            <input id='cidade' className='form-input' onChange={fFormulario(setCidade)}/>
          </label>
        
          <label htmlFor='estado' className='col-span-3 form-label'>
            Estado :
            <input id='estado' className='form-input' onChange={fFormulario(setEstado)}/>
          </label>

            <button className='botao-form' onClick={fCriar}>Enviar</button>
        </form>
      
      </div>
    </section>
  )
}
