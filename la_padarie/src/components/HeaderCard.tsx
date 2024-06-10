import React from 'react'
import Image from 'next/image'

type Props = {
  title: string,
  value: number,
  icon: string,
  dark?: boolean
}

const HeaderCard = (props: Props) => {
  return (
    <div
      className={`
        ${props.dark ? "bg-[#5F3305]" : "bg-white"}
        ${props.dark ? "text-white" : "text-black"}
        gap-2 p-4 rounded-lg shadow-md flex flex-col w-full 
      `}
    >
      <div className="flex justify-between">
        <p>{props.title}</p>
        <Image src={props.icon} alt="icon" className="w-8 h-8 ml-auto" />
      </div>
      <p>{props.value}</p>
    </div>
  )
}

export default HeaderCard