import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { BiMenu } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Svg from './Svg';
import Textanim from './Textanim';
import Skills from './Skills';
gsap.registerPlugin(ScrollTrigger);
function GSAP() {
  const [count, setCount] = useState(0);
  const main=useRef(null);
  const cursor=useRef(null);
  const imagediv=useRef(null);
  var t1=gsap.timeline();
  const [show,setShow]=useState(false);
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



{
  /*

 // Cursor animation


  var image=imagediv.current;
var cursorref=cursor.current;
main.current.addEventListener("mousemove",function(dets){
    gsap.to(".cursor",{
      x:dets.x,
      y:dets.y,
      duration:0.5,
      ease:"back.out"
    })
})

image.addEventListener("mousemove",function(){
  
 cursorref.innerHTML="view  more"
  gsap.to(cursorref,{
    scale:2,
    duration:0.5,
    backgroundColor:"#ffffff8a"
    
  
  })

  
})


image.addEventListener("mouseleave",function(){
 cursorref.innerHTML=""
  gsap.to(cursorref,{
    scale:1,
    duration:0.5,
    backgroundColor:"#fff"
  })
})

  */
}




t1.to("#full",{
  right:0,
  duration:0.6,
})

t1.from("#full h4",{
  x:150,
  duration:0.7,
  stagger:0.2,
  opacity:0,
 
})

t1.from("#full .icon",{
  opacity:0,
})

t1.pause();



  })
  return (
   <div className='overflow-y-hidden overflow-x-hidden'>
   {/** <div ref={cursor} className=' z-10 cursor  flex items-center text-center justify-center text-[6px]  h-[20px] w-[20px] fixed  rounded-full bg-white'></div> */}
  
  {
    /**
      <div ref={main} className='main w-[100vw]   h-[100vh] bg-black '>
   
    <div id="nav" className='flex items-center text-white justify-between px-[40px] py-[50px]'>

        <h3 className='text-3xl'>Sanjeev</h3>
       <BiMenu  onClick={()=>{
          t1.play();
       }} className='text-3xl cursor-pointer font-bold'/>
    </div>

    <div id="full" className=' h-[100%]  text-[#ffffffac] px-[30px] py-[100px] w-[40%] absolute bg-[#ffffff69] top-0 right-[-40%] backdrop-blur-xl'>
      <h4 className='text-4xl font-bold mb-[10px]'>Work</h4>
      <h4 className='text-4xl font-bold mb-[10px]'>About</h4>
      <h4 className='text-4xl font-bold mb-[10px]'>Services</h4>
      <h4 className='text-4xl font-bold mb-[10px]'>Contact</h4>
      <h4 className='text-4xl font-bold mb-[10px]'>About</h4>

      <CgClose onClick={()=>{t1.reverse()}} className='icon cursor-pointer absolute top-[5%] text-xl font-bold text-black  rounded-full right-[10%] bg-white'/>
    </div>
   
   {
    /**
     * 
     * cursor animation
     *  <div  ref={imagediv}  className='Image relative h-[30vh] w-[60vw] '>
    
    <img
   

    src='https://images.unsplash.com/photo-1517405030045-45f7ad942106?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    className=' h-[100%] w-[100%] absolute object-cover'
    />
    <div className='overlay bg-transparent z-20 w-[100%] h-[100%] absolute'></div>
    </div>
     */
   }
   
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
    {
     /**
      * 
      *  <Svg/>
      
    }
    
   
      </div>
     */
  }

    <Textanim/>
    <Skills/>
   

   </div>
    
  )
}

export default GSAP
