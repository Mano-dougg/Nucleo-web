import React from 'react'
import HeaderCard from './HeaderCard'
import Logo from './Logo'

type Props = {
  users: number,
  breads: number,
  total: number
}

const Header = (props: Props) => {
  return (
    <section
    className="flex flex-col w-full bg-[#965A1B] items-center py-[100px] sm:py-[120px]"
    >
      <Logo />
    </section>
  )
}

export default Header