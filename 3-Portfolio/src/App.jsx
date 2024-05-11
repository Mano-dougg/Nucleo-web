import Header from './components/Header/Header'
import FirstPage from './components/FirstPage/FirstPage'
import s from './App.module.css'
import { ChakraProvider } from '@chakra-ui/react'
import SecondPage from './components/SecondPage/SecondPage'

function App() {

  return (
    <ChakraProvider>
      <section className={s.header}>
        <Header />
      </section>
      <section className={s.main}>
        <FirstPage />
        <SecondPage />
      </section>
    </ChakraProvider>
  )
}

export default App
