import './App.css'
import Header from './components/Header'
import Section1 from './components/Section1'
function App() {

  return (
    <>
      <main>
        <Header />
        <div className='sections'>
          <Section1/>
        </div>
      </main>
    </>
  )
}

export default App
