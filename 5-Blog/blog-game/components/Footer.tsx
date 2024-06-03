import { createClient } from '../prismicio';
import Link from 'next/link';
import Bounded from './Bounded';
import Heading from './Heading';

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <Bounded as="footer" className=" bg-green-950" >
      <div className="flex flex-col gap-2 md:flex-row justify-between">
        <Heading as="h4" size="sm" className="text-white font-normal lg:mb-0">
          Todos direitos reservados
        </Heading>
        <Heading as="h4" size="sm" className="text-white font-normal lg:mb-0">
          Gamenetwork@gmail.com
        </Heading>
        <Heading as="h4" size="sm" className="text-white font-normal lg:mb-0">
          @Game_Network
        </Heading>
      </div>
        <Link href="/">
          <Heading as="h1" size="md" className="mt-2 font-display font-normal text-white"><span className="font-extrabold text-green-500">Game</span>Network</Heading>
        </Link>
    </Bounded>
  );
}
