import gsap from 'gsap';
import React, { useEffect } from 'react'

function CustomCursor() {
    useEffect(()=>{
        const followCursor = (e) =>{
            const {clientX,clientY} = e;
            gsap.to('.followMe',{
                x: clientX  - 20/2,
                y: clientY - 20/2,
                duration: 1,
                // ease: "power1.inOut",
            })
        }
        window.addEventListener('mousemove',followCursor);
        return ()=>{
        window.removeEventListener('mousemove',followCursor);
        }
    },[]);
  return (
    
    <div className='followMe fixed top-0 h-[20px] w-0 lg:w-[20px] bg-white rounded-full z-100 pointer-events-none mix-blend-difference'></div>

  )
}

export default CustomCursor
