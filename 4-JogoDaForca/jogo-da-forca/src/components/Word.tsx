export default function Word(props) {

  return(
    <div className="word-container">
      {props.lettersArray.map((letter) => {
              return <div className="letter">{letter}</div>
            })}
    </div>
  )
  
}
