import Image from "next/image";

function Icon() {
    return (
      <Image 
        src="/assets/logoimg.png" 
        alt="Logo"
        width={150} // ajuste conforme necessário
        height={100} // ajuste conforme necessário
      />
    );
}

export default Icon;
