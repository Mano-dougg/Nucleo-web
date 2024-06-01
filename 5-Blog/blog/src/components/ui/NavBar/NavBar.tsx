import Link from "next/link";
import Buttons from "../Buttons/Buttons";
import { NavActions, NavContainer, NavLinks } from "./navStyle";
export { NavActions, NavContainer, NavLinks } from "./navStyle";

interface LinksDaNav{
  tag1:string;
  tag2:string;
  tag3:string;
  linkBtn:string;
}

const NavBar:React.FC<LinksDaNav> = ({linkBtn, tag1, tag2, tag3}) => {
  return (
    <NavContainer>
      <Link className="GoHome" href={"/"}>Personally</Link>
      <NavActions>
        <input type="checkbox" id="chec" />
        <label htmlFor="chec">
          <img src="/menu.svg" alt="" />
        </label>
        <NavLinks className="evento">
          <a href={tag1}>Computer</a>
          <a href={tag2}>Frutas</a>
          <a href={tag3}>Euzinho</a>
        </NavLinks>
        <Buttons PlaceHolder={"About me"} classes={"subscribe"} link={linkBtn} />
      </NavActions>
    </NavContainer>
  );
};

export default NavBar;
