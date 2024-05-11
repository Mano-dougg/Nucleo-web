import Header from './components/Header/Header'
import FirstPage from './components/FirstPage/FirstPage'
import s from './App.module.css'
import { ChakraProvider } from '@chakra-ui/react'
import SecondPage from './components/SecondPage/SecondPage'
import HamburguerMenu from './components/HamburguerMenu/HamburguerMenu'

function App() {

  return (
    <ChakraProvider>
      <section className={s.header}>
        <Header />
      </section>
      <section className={s.main}>
        <HamburguerMenu />
        <FirstPage />
        <SecondPage />
      </section>
    </ChakraProvider>
  )
}

export default App
