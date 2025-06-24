import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";

gsap.registerPlugin(SplitText);

function Navbar() {
  useGSAP(() => {
    const split = new SplitText(".smlogo", { type: "words, chars" });
    gsap.from(split.chars, {
      duration: 0.7,
      y: -100,
      ease: "power3.out",
      stagger:0.06,
    });
  }, []);
  useEffect(()=>{
    let CursorScale = document.querySelector(".CursorScale");
    CursorScale.addEventListener("mouseenter",()=>{
        gsap.to('.followMe',{
            scale:8,
        })
    });
    CursorScale.addEventListener("mouseleave",()=>{
        gsap.to('.followMe',{
            scale:1,
        })
    });
},[])

  return (
    <div className=" bg-transparent backdrop-blur-sm w-[100%] z-1 absolute text-white">
      <p className="CursorScale smlogo text-3xl md:text-4xl lg:text-5xl font-[Caveat] px-[50px] py-[30px]">
        Smalakar
      </p>
    </div>
  );
}

export default Navbar;
