import NavBar from "@/components/ui/NavBar/NavBar";
import { createClient } from "@prismicio/client";
import {
  AboutLinks,
  AboutMeContainer,
  AboutText,
  AboutTextPrincipal,
  Buttons,
} from "./AboutSytle";
import Image from "next/image";
import Link from "next/link";

const AboutMe = ({ computer, frutas }: { computer: any; frutas: any }) => {
  return (
    <>
      <NavBar
        tag1={`/blogPostsTags/${computer?.results[0].tags[0]}`}
        tag2={`/blogPostsTags/${frutas?.results[0].tags[0]}`}
        tag3={"/aboutMe/AboutMe"}
        linkBtn={"/aboutMe/AboutMe"}
      ></NavBar>
      <AboutMeContainer>
        <AboutText>
          <h3>Hello I am Jaedson</h3>
          <AboutTextPrincipal>
            <h1>Eu sou um desenvolvedor frontend</h1>
            <h3>
              Sempre tive muita atração pelas áreas de exatas, dado isso durante
              meus estudos para o ENEM decidi me dedicar para ser aprovado em
              matemática. Porém, por conselhor de uma amiga, tive curiosidade em
              conhecer mais sobre o ramo de tecnologia o que me levou ao tão
              prazeroso desenvolvimento frontend, uma área que me interessou e
              me cativou. Com isso estou atualemente focando meus estudos nessa
              áreas, porém almejo um dia me virar para o backend e conseguir
              atuar no mercado de trabalho como um fullstack
            </h3>
          </AboutTextPrincipal>
          <AboutLinks>
            <h3>Social Medias:</h3>
            <div>
              <Link href={"https://www.instagram.com/jaedsonn01/"}>
                <Image
                  src={"/instagram.svg"}
                  alt={""}
                  width={100}
                  height={100}
                />
              </Link>
              <Link href={"https://www.linkedin.com/feed/"}>
                <Image
                  src={"/linkedin (2).svg"}
                  alt={""}
                  width={100}
                  height={100}
                />
              </Link>
              <Link href={"https://github.com/Jaedsonn"}>
                <Image src={"/github.svg"} alt={""} width={100} height={100} />
              </Link>
            </div>
          </AboutLinks>
          <AboutLinks>
            <h3>Tecnologias de atuação: </h3>

            <div>
              <Image
                src={"/javascript.svg"}
                alt={""}
                width={100}
                height={100}
              />

              <Image
                src={"/typescript.svg"}
                alt={""}
                width={100}
                height={100}
              />
              <Image src={"/sass.svg"} alt={""} width={100} height={100} />
              <Image src={"/bootstrap.svg"} alt={""} width={100} height={100} />
              <Image src={"/react.svg"} alt={""} width={100} height={100} />
            </div>
          </AboutLinks>
          <Buttons>
            <button className="btn1">Primeiro</button>
            <button className="btn2">Segundo</button>
          </Buttons>
        </AboutText>
        <Image
          src={"/eu.jpg"}
          alt={""}
          height={400}
          width={400}
          className="eu"
        ></Image>
      </AboutMeContainer>
    </>
  );
};

export async function getStaticProps() {
  const client = createClient("JaedsonBlog");

  const computer = await client.getByTag("computer");

  const frutas = await client.getByTag("fruta");
  console.log(computer.results[0].tags[0]);

  return {
    props: { computer, frutas },
  };
}

export default AboutMe;
