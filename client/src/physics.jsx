import Nav from "./components/Nav";
import PhysicsHome from './components/PhysicsHome'
import Footer from './components/Footer'
import { useState } from 'react'


export default function physics(){

    const [hidden, setHidden] = useState(true);
    function passHidden(hide){
      setHidden(hide)
    }

    return(
    <>
      <Nav setHidden = {passHidden} hidden = {hidden} theme='physics'/>
      <main>
        <PhysicsHome />
      </main>
      <Footer hidden = {hidden} theme = 'physics' />
    </>
    )
}