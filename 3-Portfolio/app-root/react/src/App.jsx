import Desktop from "./assets/components/Desktop" 
import Mobile from "./assets/components/Mobile"
import "./App.css" 

let screenstate = window.screen.width

function Show() {
  if(screenstate > 1440) {
    return <Desktop/>
  }
    return <Mobile/> 
}
function App() {
  return (
    <>
      <Show/>
    </>
  )
}

export default App
