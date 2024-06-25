import Image from "next/image";
import Heart from "../../public/svg/icons/heart";
import HeartFill from "../../public/svg/icons/heart.fill";
import AddToAlbum from "../../public/svg/icons/add.to.album";

interface MovieCardProps {
  image: string;
  title: string;
  director: string;
  price: number;
  isFavorite: boolean;
  onToggleFavorite: () => void; // Função para adicionar ou remover dos favoritos
  onRemoveFavorite: () => void; // Função para remover dos favoritos
}

const MovieCard: React.FC<MovieCardProps> = ({
  image,
  title,
  director,
  price,
  isFavorite,
  onToggleFavorite,
  onRemoveFavorite,
}) => {
  const handleFavoriteClick = () => {
    onToggleFavorite(); // Chama a função para adicionar ou remover dos favoritos
  };

  const handleRemoveClick = () => {
    onRemoveFavorite(); // Chama a função para remover dos favoritos
  };

  return (
    <div className="flex flex-col w-[172px] min-h-[258px]">
      <div className="w-full h-[258px] relative">
        <Image
          src={image}
          alt=""
          layout="fill"
          unoptimized={true}
          objectFit="cover"
          className="rounded-[9px]"
        />
      </div>
      <div className="flex flex-col mt-3 px-2">
        <p className="font-medium text-base w-full truncate overflow-hidden whitespace-nowrap">
          {title}
        </p>
        <p className="text-white text-opacity-70">R$ {price.toFixed(2)}</p>
      </div>
      <div className="flex flex-row justify-between items-center mt-3">
        <button className="flex flex-row items-center justify-center gap-2 bg-[#162E37] px-4 py-3 rounded-full">
          <span className="text-sm">Add to Cart</span>
        </button>
        <div className="flex flex-row gap-6 px-7">
          {isFavorite ? (
            <button onClick={handleRemoveClick}>
              <HeartFill />
            </button>
          ) : (
            <button onClick={handleFavoriteClick}>
              <Heart />
            </button>
          )}
          <button>
            <AddToAlbum />
          </button> 
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
