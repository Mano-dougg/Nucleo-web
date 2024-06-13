import styles from './cabecalho.module.css';
 
function meuEvento(){
    let menuObjeto = document.querySelector(`.${styles.mobileMenu}`);
    
        if (menuObjeto.style.display === 'none' || menuObjeto.style.display === '') {
            menuObjeto.style.display = 'flex';
            
        } else {
            menuObjeto.style.display = 'none';
        }
}
export default meuEvento
