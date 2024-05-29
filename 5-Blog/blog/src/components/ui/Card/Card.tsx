import Link from "next/link";
import Image from 'next/image'
import { Carde, Text, CardTextContent} from "./style";

const Card = () => {
  return (
    <Link href={""}>
      <Carde>
        <CardTextContent>
          <span>AUGust 13, 2021 </span>
          <Text>
            <h3>
              10 Hilarious Cartoons That Depict Real-Life Problems of
              Programmers
            </h3>
            <p>
              Redefined the user acquisition and redesigned the onboarding
              experience, all within 3 working weeks.
            </p>
          </Text>
        </CardTextContent>
           <img src="/ArticleThumbnail.svg" alt="" />
      </Carde>
    </Link>
  );
};

export default Card;
