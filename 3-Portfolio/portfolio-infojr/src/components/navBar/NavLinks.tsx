import { MenuItemProps } from "./types/MenuItemProps"

const NavLinks = ({ onToggle }: MenuItemProps) => {
  return (
    <>
      <li onClick={onToggle}><a href="#section1">Section1</a></li>
      <li onClick={onToggle}><a href="#section2">Section2</a></li>
      <li onClick={onToggle}><a href="#section3">Section3</a></li>
    </>
  )
}

export default NavLinks