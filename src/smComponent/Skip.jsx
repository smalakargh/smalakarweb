import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all'
import { useEffect } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger) 

function Skip() {
    useEffect(()=>{
        let btn = document.querySelector(".SkipBtn");
    btn.addEventListener('click',()=>{
        gsap.to(window, { duration: 1, scrollTo: ".NavSec" });
    })
    
    },[])

    useGSAP(()=>{
        gsap.to('.SkipBtn',{
            scrollTrigger: {
                trigger: '.facts',
                onEnter: () => gsap.set('.SkipBtn', { display: 'flex' }),
                onLeaveBack: () => gsap.set('.SkipBtn', { display: 'none' }),
            }
    })
    },[])


  return (
    <div className='SkipBtn hidden z-102 w-[5px] h-[5px] md:w-[20px] md:h-[20px] rounded-full fixed right-1 bottom-2 md:right-4 md:bottom-4 bg-[#616161] text-[#fff] text-[15px] md:text-[20px] cursor-pointer items-center  justify-center p-5 md:p-7'>
      <p><FaAngleUp /></p>
    </div>
  )
}

export default Skip
