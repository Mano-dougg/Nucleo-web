import twitter from '../assets/twitter-icon.svg'
import figma from '../assets/figma-icon.svg'
import instagram from '../assets/instagram-icon.svg'

const imagesList = [
  {
    id: 1,
    src: twitter,
    alt: "Image 1",
    href: "https://x.com/",
  },
  {
    id: 2,
    src: figma,
    alt: "Image 2",
    href: "",
  },
  {
    id: 3,
    src: instagram,
    alt: "Image 3",
    href: "",
  },
];

function SocialMedia() {
  return (
    <>
      {imagesList.map((image) => (
        <a href={image.href}>
          <img key={image.id} src={image.src} alt={image.alt} />
        </a>
      ))}
    </>
  );
}

export default SocialMedia;
