/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';

type Props = {
  id: number; 
  name: string;
  imgUrl: string;
  price: number;
  isEdit?: boolean;
};

const Product = ({ id, name, imgUrl, price, isEdit }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/produto/${id}`);
  
    const storageIdExist = sessionStorage.getItem('productsIds');
    let storageId;
  
    if (storageIdExist) {
      storageId = JSON.parse(storageIdExist);
    } else {
      storageId = [];
    }
    storageId.push(id);
    sessionStorage.setItem('productsIds', JSON.stringify(storageId));
  };

  return (
    <div className='bg-white border-[1px] border-black flex flex-col justify-between sm:gap-12 gap-6 sm:py-6 sm:px-9 py-2 px-3 w-auto'>
      <div className='flex flex-col items-center justify-center'>
        <img onClick={handleClick} src={imgUrl} alt={name} className='sm:w-[261px] sm:h-[277px] w-[111px] h-[113px] object-cover cursor-pointer' />
        <p className='text-center sm:mt-8 mt-2 lg:truncate'>{name}</p>
      </div>
      <div className={`${isEdit ? 'flex-col' : ''} flex items-center justify-between flex-wrap`}>
        {isEdit ? (
          <button className='bg-black text-white px-8 py-2 rounded-full text-[24px]'>Editar</button>
        ) : (
          <>
            <p className='font-bold'>R${(price / 100).toFixed(2)}</p>
            <img src='/shopping-cart.svg' alt='Ícone do carrinho' className='sm:w-[48px] sm:h-[48px] w-[24px] h-[24px]' />
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
