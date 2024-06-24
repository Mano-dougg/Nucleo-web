// components/MovieCard.tsx
import { StaticImageData } from "next/image";
import Image from "next/image";
import CartSm from "../../public/svg/icons/cart.sm";
import Heart from "../../public/svg/icons/heart";
import HeartFill from "../../public/svg/icons/heart.fill";
import AddToAlbum from "../../public/svg/icons/add.to.album";
import { useState } from "react";

interface MovieCardProps {
  image: string;
  title: string;
  director: string;
  price: number;
  isFavorite: boolean;
  onToggleFavorite: () => void; // Passar a função como prop
}

const MovieCard: React.FC<MovieCardProps> = ({
  image,
  title,
  director,
  price,
  isFavorite,
  onToggleFavorite,
}) => {
  const [favorite, setFavorite] = useState<boolean>(isFavorite);

  const handleFavoriteClick = async () => {
    try {
      await onToggleFavorite();
      setFavorite(!favorite);
    } catch (error) {
      console.error("Failed to toggle favorite:", error);
    }
  };



  return (
    <div className="flex flex-col">
      <Image
        src={image}
        alt=""
        width={300}
        height={180}
        unoptimized={true}
        objectFit="cover"
        className="rounded-[9px]"
      />
      <div className="flex flex-col mt-3 px-2">
        <p className="font-medium text-base w-full">{title}</p>
        <p className="text-white text-opacity-70">R$ {price.toFixed(2)}</p>
      </div>
      <div className="flex flex-row justify-between items-center mt-3">
        <button className="flex flex-row items-center justify-center gap-2 bg-[#162E37] px-4 py-3 rounded-full">
          <CartSm />
          <span className="text-sm">Add to Cart</span>
        </button>
        <div className="flex flex-row gap-6 px-7">
          <button onClick={handleFavoriteClick}>
            {isFavorite ? <HeartFill /> : <Heart />}
          </button>
          <button>
            <AddToAlbum />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
