import { MenuItemProps } from "./types/MenuItemProps"

const NavLinks = ({ onToggle }: MenuItemProps) => {
  return (
    <>
      <li onClick={onToggle}><a href="#about">About</a></li>
      <li onClick={onToggle}><a href="#projects">Projects</a></li>
      {/* <li onClick={onToggle}><a href="#section3">Section3</a></li> */}
    </>
  )
}

export default NavLinks