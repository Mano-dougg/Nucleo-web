import logoImage from '/src/assets/logo.svg'; 
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
