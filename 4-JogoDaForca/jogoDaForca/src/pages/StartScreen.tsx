import UserSheet from "@/components/custom/UserSheet";

function StartScreen() {
  const backgroundImage = "url('/images/gallows.svg')"

  return (
    <div className={
      `grid h-screen place-items-center content-center gap-3 bg-center bg-no-repeat`
    } style={{ backgroundImage }}>
      <UserSheet />
    </div>
  )
}

export default StartScreen;
