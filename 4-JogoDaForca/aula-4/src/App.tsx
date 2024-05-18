import { useState } from 'react'
import './App.css'
import Header from './Header'
import Content from './Content'

function App() {
  const [classe, setClasse] = useState<string>('black')

  return (
    <>
      <Header classe={classe} mudaClasse={(classe: string) => setClasse(classe)}></Header>
      <Content classe={classe} />
    </>
  )
}

export default App
