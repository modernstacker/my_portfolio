import { useEffect, useRef, useState } from "react"
import { BrowserRouter } from "react-router-dom"
import * as THREE from "three"
import CLOUDS from "vanta/dist/vanta.clouds.min"

import {
  About,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components"

const App = () => {
  const vantaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(null)

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        CLOUDS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <>
    <BrowserRouter>
      <div className="relative z-0">
        <div ref={vantaRef} className="w-full h-screen absolute top-0 left-0 -z-10" />
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Tech />
          <About />
          <Experience />
        </div>
        <div className="relative z-0">
          <Works />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
