import React from 'react'
import { User } from './Queue'
import { Button } from './ui/button'
import DeleteIcon from './icons/DeleteIcon'

type Props = {
  user: User
}

const UserCard = ({ user }: Props) => {
  const total = user.breads * 0.5
  return (
    <div className={`flex justify-between items-center p-4 bg-background text-[hsl(31,90%,20%)] rounded-lg`}>
      <div className="flex flex-col font-bold">
        <h2 className="text-lg">{user.name}</h2>
        <div className="flex flex-col gap-x-3 sm:flex-row">
          <p>Total breads: <span className="font-normal">{user.breads}</span></p>
          <p>Sum to pay: <span className="font-normal">{`$ ${total.toFixed(2)}`}</span></p>
        </div>
      </div>
      <Button variant="ghost"><DeleteIcon /></Button>

    </div>
  )
}

export default UserCard