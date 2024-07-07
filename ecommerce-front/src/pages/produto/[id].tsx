import Button from "@/components/Button";
import CardOutros from "@/components/CardOutros";
import CardSemelhante from "@/components/CardSemelhante";
import Comentario from "@/components/comentario/Comentario";
import Dropdown from "@/components/comentario/dropdown/Dropdown";
import BaseText from "@/components/comentario/textoBase/BaseText";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionCard from "@/components/SectionCard";
import ServiceCard from "@/components/ServiceCard";
import SizeSelect from "@/components/SizeSelect";
import { Product } from "../../../../ecommerce-server/node_modules/.prisma/client/";
import refresh from '../../../public/serviceIcons/refresh-cw.svg';
import send from '../../../public/serviceIcons/send.svg';
import shield from '../../../public/serviceIcons/shield.svg';
import data from "./coments";

import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next'

export const getStaticPaths = (async () => {
  const res = await fetch(`http://localhost:3001/product/`)
  const products: Product[] = await res.json()
  const paths = products.map((product: Product) => ({
    params: { id: product.id.toString() },
  }))
  return {
    paths,
    fallback: true, // false or "blocking"
  }
}) satisfies GetStaticPaths

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3001/product/${params?.id}`);
  const product: Product | any = await res.json();
  console.log(product);
  return {
    props: {
      product
    }
  };
};

type StaticProps = InferGetStaticPropsType<typeof getStaticProps>

const Produto: React.FC<StaticProps> = ({ product }) => {

  function handleClick(): void {
    const storageIdExist = sessionStorage.getItem('cartIds');
    let storageId;

    if (!storageIdExist) {
      storageId = [];
      storageId.push(product?.id);
      sessionStorage.setItem('cartIds', JSON.stringify(storageId));
    } else {
      try {
        storageId = JSON.parse(storageIdExist);
        storageId.push(product?.id);
        sessionStorage.setItem('cartIds', JSON.stringify(storageId));
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section
      className={`flex h-auto w-screen flex-col items-center bg-bg-primary `}
    >
      <Header />

      <section
        className={` h-auto w-full flex lg:flex-row flex-col items-center justify-center py-10 lg:gap-20 gap-4 gap px-6`}
      >
        <img
          src={product?.image}
          alt={"Modelo da foto"}
          height={425}
          width={588}
          className="lg:max-w-[425px] lg:max-h-[568px] max-w-56"
        />

        <div
          className={`h-auto w-auto flex flex-col lg:gap-9 gap-4 lg:items-start items-center`}
        >
          <p className="lg:text-4xl text-3xl font-semibold lg:text-start text-center">
            {product?.title}
          </p>
          <p className="lg:text-4xl text-3xl font-semibold">R$ {product?.currentPrice / 100}</p>
          <p className="text-2xl text-black flex items-center font-semibold gap-4">
            Cor: Preto
            <span className="flex w-6 h-6 rounded-full bg-black"></span>
          </p>
          <p className="text-2xl text-black lg:font-normal font-semibold ">
            Tamanhos:
          </p>
          <div className="flex w-full max-w-96 lg:gap-4 lg:justify-normal justify-around">
            {product?.sizes?.map((tamanho: string) => (
              <SizeSelect peerName={tamanho} value={tamanho} key={crypto.randomUUID()} />
            ))}
          </div>
          <button

            className="bg-black text-white rounded-[60px] text-[24px] px-8 py-2 text-center lg:w-max self-center h-auto text-2xl font-semibold lg:w-auto lg:px-48 lg:py-5 w-full"
            onClick={() => handleClick()}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </section>

      <section
        className={` h-auto w-full flex lg:flex-row flex-col items-center justify-center py-10 lg:gap-20 gap-4 gap px-6 mb-20`}
      >
        <div
          className={`lg:flex flex-col gap-10 hidden items-center justify-center`}
        >
          <BaseText isBlack={true}>Comentários:</BaseText>
          {data?.map((comment, index) => (
            <Comentario
              userImageUrl={comment.userImageUrl}
              userName={comment.userName}
              comentario={comment.comentario}
              time={comment.time}
              key={crypto.randomUUID()}
            />
          ))}
          <Button url={""}>Ver mais</Button>
        </div>
        <Dropdown />
        <div
          className={`lg:flex flex-col gap-4 justify-between w-auto h-autoo bg-bg-filter items-center px-5 py-6  hidden`}
        >
          <p className="text-3xl font-semibold w-full text-start text-text-primary">
            Sobre o serviço
          </p>
          <ServiceCard leftImgUrl={send}>
            Frete gratis em pedidos acima de R$60,00
          </ServiceCard>
          <ServiceCard leftImgUrl={refresh}>
            Politica de Devolução
          </ServiceCard>
          <ServiceCard leftImgUrl={shield}>
            Segurança de compra
          </ServiceCard>
        </div>
      </section>

      <SectionCard title={"Items semelhantes"}>
        <CardSemelhante
          imageUrl="/Frame 153.png"
          produtoNome="Blusa estampada"
          preco="19,99"
          show={""}
        />
        <CardSemelhante
          imageUrl="/Frame 153.png"
          produtoNome="Blusa estampada"
          preco="19,99"
          show={""}
        />
        <CardSemelhante
          imageUrl="/Frame 153.png"
          produtoNome="Blusa estampada"
          preco="19,99"
          show={"hidden"}
        />
        <CardSemelhante
          imageUrl="/Frame 153.png"
          produtoNome="Blusa estampada"
          preco="19,99"
          show={"hidden"}
        />
      </SectionCard>

      <SectionCard title={"Outros itens"}>
        <CardOutros
          imageUrl="/Frame 1.png"
          produtoName="Sapatos"
          show={"hidden"}
        />
        <CardOutros imageUrl="/Frame 1.png" produtoName="Sapatos" />
        <CardOutros imageUrl="/Frame 1.png" produtoName="Sapatos" />
        <CardOutros
          imageUrl="/Frame 1.png"
          produtoName="Sapatos"
          show={"hidden"}
        />
      </SectionCard>
      <Footer />
    </section>
  );
};

export default Produto;
