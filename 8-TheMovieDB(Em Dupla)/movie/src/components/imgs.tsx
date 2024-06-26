import Image from 'next/image'
import ImgLike from '../../img/gostar.png' 

export default function Imglike() {
  return (
    <Image
      src={ImgLike}
      width={50}
      height={50}
      alt="Picture of the author"
    />
  )
}
