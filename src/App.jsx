import { ReactLenis, useLenis } from 'lenis/react'
import Navbar from './component/Navbar'
import SkillCount from './component/SkillCount'
import Cards from './component/Cards'
import Footer from './component/Footer'
import GetTouch from './component/GetTouch'
import CustomCursor from './component/CustomCursor'
import HeroSec from './component/HeroSec'

function App() {
  const lenis = useLenis();
  return (
    <>
      <ReactLenis root />
      <Navbar/>
      <HeroSec />
      <SkillCount/>
      <Cards/>
      <GetTouch/>
      <CustomCursor/>
      <Footer/>
    </>
  )
}

export default App
