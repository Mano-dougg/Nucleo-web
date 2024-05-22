import './style.css'


export const Button = ({ texto, classe } : { texto: string, classe:string }) => {

  return (
    <button className={classe}><p>{texto}</p></button>
)
};
