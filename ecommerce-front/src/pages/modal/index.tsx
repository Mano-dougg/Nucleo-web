import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CreateForm from '@/components/formularios/CreateForm';

const Produto = () => {

  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <Header />
      <CreateForm formStyle='border-none flex-col' divStyle='w-10/12 min-w-96' />
      <Footer />
    </div>
  );
};

export default Produto;
