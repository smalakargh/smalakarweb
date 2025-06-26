import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useEffect } from 'react'


// import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin'
import { TextPlugin } from "gsap/TextPlugin";
import Particles from './particle';
import GithubBtn from '../smComponent/GithubBtn';
import LinkedInBtn from '../smComponent/LinkedInBtn';

gsap.registerPlugin(TextPlugin);
// gsap.registerPlugin(ScrambleTextPlugin);


function HeroSec() {
    useGSAP(()=>{
        gsap.to('.smName',{
            duration: 3,
            scrambleText: {
                text: "Supriyo Malakar",
                chars: "CAL#$%thean",
                speed: 0.3,
                revealDelay: 0.2,
            }
            
        })
    },[])


        useEffect(()=>{
        let CursorScale = document.querySelector(".CursorScaleAvt");
         const followMe = document.querySelector(".followMe");
        CursorScale.addEventListener("mouseenter",()=>{
            followMe.textContent = "Smalakar";
            Object.assign(followMe.style, {
                    mixBlendMode: "normal",
                    display: "flex",
                    width: "50px",
                    height: "20px",
                    borderRadius: "4px",
                    fontFamily: "Poppins",
                    fontSize: "9px",
                    paddingLeft: "6px",
                    paddingRight: "6px"
              });
            });
            CursorScale.addEventListener("mouseleave",()=>{
              followMe.textContent = "";
              Object.assign(followMe.style, {
                    mixBlendMode: "difference",
                    width: "20px",
                    height: "20px",
                    borderRadius: "100%",
              });
        });
    
    
      const cursorTargets = document.querySelectorAll(".CursorScale");
    
      const handleEnter = () => {
        gsap.to(".followMe", { scale: 8 });
      };
    
      const handleLeave = () => {
        gsap.to(".followMe", { scale: 1 });
      };
    
      cursorTargets.forEach((el) => {
        el.addEventListener("mouseenter", handleEnter);
        el.addEventListener("mouseleave", handleLeave);
      });
    
      return () => {
        cursorTargets.forEach((el) => {
          el.removeEventListener("mouseenter", handleEnter);
          el.removeEventListener("mouseleave", handleLeave);
        });
      };
    
    
    
    
    },[])
    

  return (
    <>
      <div className='w-[100%] h-[100vh] relative bg-[#b5b2b5] overflow-hidden z-1'>
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
      <div className='w-[100%] h-[100vh] font-[poppins] bg-transparent absolute top-0 z-10 flex justify-evenly md:justify-around items-center flex-col-reverse md:flex-row p-9 md:p-2'>
        <div className='Left CursorScale  w-[35vh] md:w-[50vh] backdrop-blur'>
            <div className=' flex gap-1 lg:text-[36px] font-[700] text-[24px] '>I'm <p className='smName  text-transparent bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text'>Supriyo Malakar</p></div>

            {/* TypeWriter */}
            <div className=" liveTxt">
                           <div className="wrapper">
                               <div className="staticTxt">I love</div>
                               <ul className="dynamicTxt">
                                   <li><span>Developing</span></li>
                                   <li><span>Coding</span></li>
                                   <li><span>Robotics</span></li>
                                   <li><span>Calisthenics</span></li>
                               </ul>
                           </div>
                       </div>
            {/* TypeWriter */}

            <p className=' text-[14px] md:text-[18px]' >I am a skilled front-end developer experienced in creating visually stunning and user-friendly websites and applications. I use UI/UX design principles to deliver high-quality products that meet client expectations.</p>
            <div className='flex'>
              <GithubBtn/>
              <LinkedInBtn/>
            </div>
        </div>
        <div className='Right rounded-full w-64 md:w-95 animate-wiggle'>
            <img className='CursorScaleAvt p-[2px] rounded-full' src="https://avatars.githubusercontent.com/u/171774147?v=4" alt="DeveloperSm" />
        </div>
      </div>
    </div>
    </>
  )
}

export default HeroSec
