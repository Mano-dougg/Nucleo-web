import './App.css'
import Header from './components/Header'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
function App() {

  return (
    <>
      <main>
        <Header />
        <div className='sections'>
          <Section1/>
          <Section2/>
        </div>
      </main>
    </>
  )
}

export default App
