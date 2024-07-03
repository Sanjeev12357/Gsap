import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Skills from './Skills'
const Textanim = () => {
    useGSAP(()=>{
       
       window.addEventListener("wheel",function(dets){
            if(dets.deltaY>0){
                gsap.to(".marque",{
                    transform:'translateX(-200%)',
                 
                    duration:3,
                    repeat:-1,
                    ease:'none',
                })
            }else{
                gsap.to(".marque",{
                    transform:'translateX(0%)',
                  
                    duration:3,
                    repeat:-1,
                    ease:'none',
                })

            }
       })

       var h1=document.querySelector("h1")
       var h1text=h1.textContent;
        var splittedText=h1text.split("");
       var halfvalue=Math.floor(splittedText.length/2)
       var clutter=""; 
       splittedText.forEach(function(elem,idx){
           if(idx<halfvalue){
                clutter+=`<span class="a">${elem}</span>`
           }else{
                clutter+=`<span class='b'>${elem}</span>`
           }
        })

        h1.innerHTML=clutter;

        gsap.from("h1 .a",{
                y:80,
                opacity:0,
                duration:0.8,
                delay:0.5,
                stagger:0.15,
        })

        gsap.from("h1 .b",{
                y:80,
                opacity:0,
                duration:0.8,
                delay:0.5,
                stagger:-0.15,
        
        })
      
    })
  return (
    <div >
        <div className='page1 flex items-center text-[100px] text-white justify-center h-[100vh] w-[100%]'>
            <h1 className='overflow-hidden'>
            sanjeev
            </h1>
        
        </div>
        <div className='page2 h-[100vh] w-[100%]'>
            <div className='move overflow-hidden flex py-[3vw] px-0 bg-[#D8FF04] '>
                <div className='marque translate-x-[-100%] flex-shrink-0 flex items-center py-0 px-[1.5vw] '>
                <h1 className='text-[70px] font-thin'>THRIVE BEYOND LIMITS</h1>
                </div>
                <div className='marque translate-x-[-100%]  flex-shrink-0 flex items-center py-0 px-[1.5vw] '>
                <h1 className='text-[70px] font-thin'>THRIVE BEYOND LIMITS</h1>
                </div>
                <div className='marque translate-x-[-100%] flex-shrink-0  flex items-center py-0 px-[1.5vw] '>
                <h1 className='text-[70px] font-thin'>THRIVE BEYOND LIMITS</h1>
                </div>
                <div className='marque translate-x-[-100%] flex-shrink-0  flex items-center py-0 px-[1.5vw] '>
                <h1 className='text-[70px] font-thin'>THRIVE BEYOND LIMITS</h1>
                </div>
                <div className='marque  translate-x-[-100%] flex-shrink-0  flex items-center py-0 px-[1.5vw] '>
                <h1 className='text-[70px] font-thin'>THRIVE BEYOND LIMITS</h1>
                </div>
            </div>
        </div>
        <div className='page3 h-[100vh] w-[100%]'>
       
        </div>
    </div>
  )
}

export default Textanim