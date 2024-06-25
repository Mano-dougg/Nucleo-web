import { HeaderContainer, HeaderContent } from "./headerStyle";
interface HeaderProsp {
  TituloPrincipal: string;
  HeaderDescricao: string;
}

const Header: React.FC<HeaderProsp> = ({
  TituloPrincipal,
  HeaderDescricao,
}) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>{TituloPrincipal}</h1>
        <h3>{HeaderDescricao}</h3>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
