import { createClient } from '../prismicio';
import Link from 'next/link';

export default async function Footer() {

  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <footer>
        <h4>Todos direitos reservados</h4>
        <h4>Gamenetwork@gmail.com</h4>
        <Link href="/">{settings.data.site_title}</Link>
    
    
    </footer>
  );
}