import logoImage from '/src/assets/logo.svg'; 
import bottonimg from './Icon.png'
import Image from 'next/image';

export function LogoPadaria() {
  return (
    <Image
      src={logoImage} 
      layout="responsive" 
      width={119}
      height={117}
      alt="Imagem do autor"
    />
  );
}

export function ButtonDelete() {
  return (
    
          <Image 
              src={bottonimg} 
              alt="Delete button" 
              layout="responsive" 
              width={24}  
              height={24} 
          />
  );
}