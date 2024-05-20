'use client';
import s from './register.module.css'
export default function Register(){

    function makeRegister(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword')
        }
    }

    return(
        <div className={s.container}>
            <h1>Registre-se</h1>
            <form onSubmit={(e)=>makeRegister(e)} className={s.form} autoComplete='off' >
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