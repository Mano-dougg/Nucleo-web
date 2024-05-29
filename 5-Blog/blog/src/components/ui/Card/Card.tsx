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
           <img src="https://images.unsplash.com/photo-1716903904403-20a28f5afb88?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </Carde>
    </Link>
  );
};

export default Card;
