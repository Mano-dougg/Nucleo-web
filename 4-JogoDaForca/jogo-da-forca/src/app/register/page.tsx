'use client';
import { useRouter } from 'next/navigation';
import s from './register.module.css'
import { useState } from 'react';

interface errorStatus{
    message: string
    code: number
}

export default function Register(){
    const [ error, setError ] = useState<errorStatus>({message:"", code:0})
    const router = useRouter()

    async function makeRegister(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const formData = new FormData(e.currentTarget);


        if(formData.get('password') !== formData.get("confirmPassword")){
            setError({
                message: "As senhas não conferem!",
                code:1
            })
        }

        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
        }

        const response = await fetch('/api/auth/register', {
            body: JSON.stringify(data),
            method:"post"
        })

        if(response.ok){
            setError({message:"", code:0})
            router.push('/api/auth/signin')
        }
    
    }

    return(
        <div className={s.container}>
            <h1>Registre-se</h1>
            <form onSubmit={(e)=>makeRegister(e)} className={s.form} autoComplete='off' >
                {error.message !== "" &&
                    <div className={s.error}>
                        {error.message}
                    </div>
                }
                <input
                    type="text"
                    placeholder="Nome"
                    name="name"
                    autoComplete='off'
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    autoComplete='off'
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                />
                <input
                    type='password'
                    placeholder='Confirm password'
                    name='confirmPassword'
                    autoComplete='off'
                />
                <button className={s.button}>Cadastrar</button>
            </form>
        </div>
    )
}