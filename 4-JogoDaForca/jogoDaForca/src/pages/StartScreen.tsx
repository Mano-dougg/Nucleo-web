import { buttonVariants } from "@/components/ui/button"
import { Link } from "react-router-dom"

const StartScreen = () => {
  const backgroundImage = "url('/images/gallows.svg')"

  return (
    <div className={
      `grid h-screen place-items-center content-center gap-3 bg-center bg-no-repeat`
      } style={{ backgroundImage }}>
      <Link className={buttonVariants({ variant: "default" })} to="user">Select user</Link>
      <Link className={buttonVariants({ variant: "secondary" })} to="game">Play as guest</Link>
    </div>
  )
}

export default StartScreen