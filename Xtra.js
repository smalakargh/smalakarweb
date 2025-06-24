import gsap from "gsap";
import { useEffect } from "react";

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