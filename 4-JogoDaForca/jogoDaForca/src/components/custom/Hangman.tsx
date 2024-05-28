type HangmanProps = {
  badGuesses: number;
};

function Hangman({ badGuesses }: HangmanProps) {
  // Body parts 
  const head = (
    <div
      key={1}
      className="w-12 h-12 rounded-full border-4 border-black dark:border-white absolute top-10 md:top-16 right-[-20px] md:right-[-14px]"
    />
  )

  const body = (
    <div
      key={2}
      className="w-1 h-28 bg-black dark:bg-white absolute top-[84px] md:top-28 right-0 md:right-2"
    />
  )

  const rightArm = (
    <div
      key={3}
      className="w-1 h-16 bg-black dark:bg-white absolute top-20 md:top-24 -right-6 md:-right-4 rotate-45"
    />
  )

  const leftArm = (
    <div
      key={4}
      className="w-1 h-16 bg-black dark:bg-white absolute top-20 md:top-24 right-6 md:right-8 -rotate-45"
    />
  )

  const rightLeg = (
    <div
      key={5}
      className="w-1 h-12 bg-black dark:bg-white absolute top-[188px] md:top-52 -right-4 md:-right-2 rotate-[135deg]"
    />
  )

  const leftLeg = (
    <div
      key={6}
      className="w-1 h-12 bg-black dark:bg-white absolute top-[188px] md:top-52 right-4 md:right-6 -rotate-[135deg]"
    />
  )

  const bodyParts = [ head, body, rightArm, leftArm, rightLeg, leftLeg ];

  return (
    <div
      className="relative mt-10"
    >
      {bodyParts.slice(0, badGuesses)}

      {/* Top structure */}
      <div
        className="h-10 md:h-16 w-2 md:w-5 bg-black dark:bg-white absolute top-0 right-0"
      />

      {/* Noose */}
      <div
        className="h-2 md:h-5 w-40 md:w-72 bg-black dark:bg-white ml-20 md:ml-36"
      />

      {/* Pole */}
      <div
        className="h-72 md:h-96 w-2 md:w-5 bg-black dark:bg-white ml-20 md:ml-36"
      />

      {/* Floor */}
      <div
        className="h-2 md:h-5 w-40 md:w-72 bg-black dark:bg-white"
      />
    </div>
  )
}

export default Hangman;
