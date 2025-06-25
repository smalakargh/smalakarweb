import React from 'react'
import Particles from './component/particle'
import Navbar from './component/Navbar'
import Cobe from './component/Cobe'
import Textrot from './component/Textrot'
import SkillCount from './component/SkillCount'
import Cards from './component/Cards'
import Footer from './component/Footer'
import GetTouch from './component/GetTouch'
import CustomCursor from './component/CustomCursor'


function App() {
  return (
    <>
      <Navbar/>
      <div style={{ width: '100%', height: '100vh', position: 'relative',background:'#b5b2b5', overflow:'hidden'}}>
      <Particles
        particleColors={['#000', '#fff']}
        particleCount={1200}
        particleSpread={13}
        speed={0.2}
        particleBaseSize={160}
        moveParticlesOnHover={true}
        alphaParticles={true}
        disableRotation={false}
        className='fixed'
      />
    </div>
    <SkillCount/>
    <Cards/>
    <GetTouch/>
    <CustomCursor/>
    <Footer/>
    </>
  )
}

export default App
