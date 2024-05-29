import Buttons from "../Buttons/Buttons";
import { NavActions, NavContainer, NavLinks } from "./navStyle";
export { NavActions, NavContainer, NavLinks } from "./navStyle";

const NavBar = () => {
  return (
    <NavContainer>
      <h3>Personally</h3>
      <NavActions>
        <input type="checkbox" id="chec" />
        <label htmlFor="chec">
          <img src="/menu.svg" alt="" />
        </label>
        <NavLinks className="evento">
          <a href="">Dailly Digest</a>
          <a href="">Design Tools</a>
          <a href="">Tutorials</a>
        </NavLinks>
        <Buttons PlaceHolder={"Subscribe"} classes={"subscribe"} />
      </NavActions>
    </NavContainer>
  );
};

export default NavBar;
