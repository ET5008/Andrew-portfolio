import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {

  const [hidden, setHidden] = useState(true);
  function passHidden(hide){
    setHidden(hide)
  }

  // const [theme, setTheme] = useState('home');
  // function passTheme(pageTheme){
  //   setTheme(pageTheme)
  // }
  // Revisit after setting up router

  return (
    <>
      <Nav setHidden = {passHidden} hidden = {hidden} />
      <main>
        <Home />
      </main>
      <Footer hidden = {hidden} theme='home'/>
    </>
  )
}

export default App
