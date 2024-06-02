import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <header>
        <nav className="flex flex-row justify-between align-middle leading-none px-3 md:px-8 py-6">
            <a href="/"><h1 className="font-black text-lg md:text-3xl">{settings.data.titulo}</h1></a>
            <h2 className="text-gray-300 text-xs leading-none mt-2.5 md:text-xl md:mt-1.5">{settings.data.subtitulo}</h2>
        </nav>
        <PrismicNextImage field={settings.data.imagem} className="w-screen h-40 object-cover shadow-inner" />
    </header>
  );
}
