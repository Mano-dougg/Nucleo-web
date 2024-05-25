import "./Hangman.css"

const HEAD = (
  <div className="cabeca"
  />
)

const BODY = (
  <div className="corpo"
  />
)

const RIGHT_ARM = (
  <div className="bracod"
  />
)

const LEFT_ARM = (
  <div className="bracoe"
  />
)

const RIGHT_LEG = (
  <div className="pernad"
  />
)

const LEFT_LEG = (
  <div className="pernae"
  />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
  numberOfGuesses: number
}

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        className="forca"
      />
      <div
        className="topbar"
      />
      <div
        className="poll"
      />
      <div className="bottombar" />
    </div>
  )
}
