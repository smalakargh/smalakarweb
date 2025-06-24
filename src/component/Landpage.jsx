import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
import landingPageData from "../data/mydata";
import GithubBtn from "../smComponent/GithubBtn";
import LinkedInBtn from "../smComponent/LinkedInBtn";
import { useEffect } from "react";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrambleTextPlugin);

function Landpage() {
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
    <div> 
    <div className="absolute left-10 top-[50vh] md:top-[37vh] md:left-[10vh] text-[15px] lg:text-[17px] lg:left-[20vh] w-[50vh] backdrop-blur border-sky-950">
    <div className="font-sm flex flex-wrap gap-2 lg:text-4xl font-[700] text-[28px] CursorScale ">
      I'm <p className="smName text-transparent bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text "></p>
    </div>
    {/* TypeWriter */}
     <div className="CursorScale liveTxt">
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
    <p className="CursorScale w-[70%] lg:w-[90%] font-sm">{landingPageData.about}</p>
    <div className="flex">
      <GithubBtn/>
      <LinkedInBtn/>
    </div>
    </div>
    <div className="absolute top-37 right-16 md:right-35 md:top-70 lg:top-45 lg:right-45 shadow-[0_0_20px_rgba(255,0,255,0.6)] rounded-[100%] bg-gradient-to-tl from-blue-600 to-purple-600 animate-border-glow ">
      <img className="CursorScaleAvt rounded-[100%] p-[2px] w-[270px] lg:w-[450px]" src="https://avatars.githubusercontent.com/u/171774147?v=4" alt="DeveloperSm" /></div>
    </div>
  )
}

export default Landpage
