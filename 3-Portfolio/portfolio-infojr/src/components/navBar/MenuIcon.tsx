import { MenuIconProps } from "./types/MenuIconProps"

const MenuIcon = ({ isDarkThemed, isMenuOpen }: MenuIconProps) => {
  return (
    <>
      {isMenuOpen
        ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <g clipPath="url(#clip0_323_76)">
              <path d="M29.0625 25.0312L25.0312 29.0625L15 19.0312L4.96875 29.0625L0.9375 25.0312L10.9688 15L0.9375 4.96875L4.96875 0.9375L15 10.9688L25.0312 0.9375L29.0625 4.96875L19.0312 15L29.0625 25.0312Z" fill={isDarkThemed ? "#FAF4E6" : "#0065FF"} />
            </g>
            <defs>
              <clipPath id="clip0_323_76">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )
        : (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M30 22.5V27H0V22.5H30ZM30 13.5V18H0V13.5H30ZM30 4.5V9H0V4.5H30Z" fill={isDarkThemed ? "#FAF4E6" : "#0065FF"} />
        </svg>
        )
      }
    </>
  )
}

export default MenuIcon