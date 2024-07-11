import React, { useEffect } from 'react'
import gsap from 'gsap'
import "./App.css"
import {useGSAP} from "@gsap/react"
import { useRef } from 'react'
const App = () => {
  const href=useRef(null);
  useGSAP(()=>{
    
    var h5time=href.current;
    var tl=gsap.timeline();
    tl.from(".line h1",{
      y:150,
      stagger:0.25,
      duration:0.6,
      delay:0.5,
      
    })
    tl.from("#line1-part1",{
      opacity:0,
      onStart:()=>{
        
        var grow=0;
        setInterval(function(){
          if(grow<100){
            grow++;
            h5time.innerHTML=grow;
          }else{
            grow=100;
          }
        },33)
      }
    })

    tl.to(".line h2",{
      animationName:"anime",
      opacity:1,
    })

    tl.to("#loader",{
      opacity:0,
      duration:0.2,
      delay:4
    })
    tl.to("#loader",{
      display:"none",
    })
    tl.from("#page1",{
      delay:0.2,
      y:1600,
      duration:0.6,
      ease:"power4.out",
     
     
    
    })
   
   
  })
  return (
    <>
    <div id="loader" className='loader py-[25vh] px-[10vw] h-[100%] w-[100%] fixed z-999 bg-[#0B0B0B]'>
      <div className="line ">
        <div id="line1-part1">
          <h5 ref={href}>00</h5>
          <h6>- 100 {" "} </h6>
        </div>
        <h1 className='text-[6.8vw] mx-[20px] font-semibold uppercase font'> Your</h1>
      </div>
      <div className="line ">
      <h1 className='text-[6.8vw] font-semibold uppercase'>Web Experiences</h1>
    </div>
    <div className="line ">
    <h1 className='text-[6.8vw] font-semibold uppercase pr-2'>is loading right</h1>
    <h2>NOW</h2>

  </div>
    </div>
    <div id="main">
      <div id="page1" ></div>
      <div id="page2"></div>
      <div id="page3"></div>
    </div>
    </>
  )
}

export default App