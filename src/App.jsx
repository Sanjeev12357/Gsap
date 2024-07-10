import React from 'react'
import './App.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  var first=useRef(null);
 
  
  
  useGSAP(()=>{
    // var h1Text=first.current.textContent;
    // var splitedText=h1Text.split("");
    //   var clutter="";
    // splitedText.map(function(elem){
    
    //   console.log(elem);
    //   clutter+=`<span>${elem === " " ? "&nbsp;" : elem}</span>`;
    // })
    // //console.log(clutter);
    // first.current.innerHTML=clutter;

    var allH1=document.querySelectorAll("#page2 h1");
    allH1.forEach(function(elem){
      var h1Text=elem.textContent;
      var splitedText=h1Text.split("");
        var clutter="";
      splitedText.map(function(e){
      
        console.log(e);
        clutter+=`<span>${e === " " ? "&nbsp;" : e}</span>`;
      })
      //console.log(clutter);
      elem.innerHTML=clutter;
    })
    gsap.to("#page2 h1 span",{
      color:"#E3E3C4",
      stagger:0.1,
      scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"top -10%",
        scrub:1,

      }
    })
  })
  return (
    <div id="main">
      <div id="page1"></div>
      <div id="page2">
        <h1 ref={first} id="first">Set within the </h1>
        <h1>verdant pine and </h1>
        <h1>oak tree forest of </h1>
        <h1>miljeet national park</h1>
        <h1>just two hours by </h1>
        <h1>passenger or car</h1>
        <h1>ferry from</h1>
        <h1>Durbonvik </h1>
        
      </div>
      <div id="page3"></div>
    </div>
  )
}

export default App