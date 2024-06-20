import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Svg from './Svg';
gsap.registerPlugin(ScrollTrigger);
function App() {
  const [count, setCount] = useState(0);
  var t1=gsap.timeline();
  useGSAP(()=>{
    // t1.to('.box',
    //    {
    //     duration: 2,
    //     delay:2,
    //     x: 700,
    //     rotate:360,
    //     repeat:-1,
    //     yoyo:true,
    //     backgroundColor: 'blue',
    //     borderRadius:"50%"
    //   }
    //   )
    //   t1.to('.box2',
    //     {
    //      duration: 2,
    //      delay:2,
    //      x: 800,
    //      rotate:360,
    //      backgroundColor: 'blue',
    //      borderRadius:"50%",
    //      repeat:-1,
    //     yoyo:true,
    //     backgroundColor: 'blue',
    //     borderRadius:"50%"
    //    }
    //    )
    //    t1.to('.box3',
    //     {
    //      duration: 2,
    //      delay:2,
    //      x: 800,
    //      rotate:360,
    //      backgroundColor: 'blue',
    //      borderRadius:"50%",
    //      repeat:-1,
    //     yoyo:true,
    //     backgroundColor: 'blue',
    //     borderRadius:"50%"
    //    }
    //    )

      {/**
        Navbar
         t1.from("h1",
        {
        opacity:0,
        y:-30,
      duration:1.5,
    delay:0.5,
    
   
  })
  t1.from("h4",{
  opacity:0,
  y:-20,
  duration:0.15,
 
  stagger:0.2 ,

  })

  t1.from("h2",{
    opacity:0,
    y:-20,
    duration:1,
  scale:1.5,
  
    
  
    
  })

*/}
{/** 
  Scroll Trigger
  
  gsap.from(".page1 .box",{
  scale:0,
  delay:1,
  duration:2,
  rotate:360,
})

gsap.from(".page2 .box",{
  scale:0,
  delay:1,
  duration:2,
  rotate:360,
  scrollTrigger:{
    trigger:".page2 .box",
    start:"top 60%",
    end:"bottom 30%",
        markers:true,

    scrub:1,

  }
})

gsap.from(".page3 .box",{
  scale:0,
  delay:1,
  duration:2,
  rotate:360,
  
})*/}
//Horizontal Scroll
// gsap.to(".page2 div",{
//   transform:"translateX(-150%)",
//   scrollTrigger:{
//     trigger:".page2",//when we use the property pin we only write the aprent in the trigger property

    
//     markers:true,
//     start:"top 0%",
//     end:"top -100%",
//     scrub:2,
//     pin:true,
    

//   }
// })



  })
  return (
    <div className='bg-black h-[100vh] '>
    
 {/**
  <div className="box rounded-full w-[300px] h-[300px] bg-red-300"></div>
 <div className="box2 rounded-full w-[300px] h-[300px] bg-red-300"></div>
 <div className="box3 rounded-full w-[300px] h-[300px] bg-red-300"></div>
  
  <h1 className='text-white '>Hello I am Sanjeev</h1>
  <h1 className='text-white'>Hello </h1>
  <h1 className='text-white'>Hello Buddy</h1>
  */}

  {/**
    Navbar
     <div className="flex pt-4 text-white items-center justify-between">
    <h1>DevGods</h1>
    <div className="flex gap-2 items-center justify-between">
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Projects</h4>
      <h4>Contact</h4>
    </div>
  </div>
  <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-5xl">
  Sanjeev Portfolio
</h2>
    */}

   {/**
    Scroll trigger
     <div className="page1 h-[100%] flex items-center justify-center w-[100%] bg-blue-300">
      <div className="box h-[300px] bg-red-400 w-[300px]"></div>
    </div>
    <div className="page2 h-[100%]  flex items-center justify-center  w-[100%] bg-blue-500">
    <div className="box h-[300px] bg-red-400 w-[300px]"></div>
    </div>
    <div className="page3 h-[100%]   flex items-center justify-center w-[100%] bg-blue-800">
    <div className="box h-[300px] bg-red-400 w-[300px]"></div>
    </div>
    */}
 
    {/**
       <div className="page1 h-[100%] w-[100%] bg-black">
      <div className="box">
      </div>
    </div>
    <div className="page2 overflow-x-hidden h-[100%] w-[100%] bg-blue-200">
    <div className="box text-[30vw] font-bold uppercase">
    Experineces
    </div>
  </div>
  <div className="page3 h-[100%] w-[100%] bg-black">
  <div className="box">
  </div>
</div>
      */}
   <Svg/>
 
    </div>
    
  )
}

export default App
