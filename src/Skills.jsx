import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const Skills = () => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.parent ',
                pin: true,
                start: '10% 50%',
                end: '500% 50% ',
                scrub: true,
               //markers: true,
               
               
            }
        });

        t1.to(".skills #html", {
            opacity: 1,
            filter: 'blur(0px)',
            transition: 'all 0.5s ease',
        })
        .to("#css", {
            opacity: 1,
            filter: 'blur(0px)',
            transition: 'all 0.5s ease',
            delay: -0.3,
        })
        .to("#js", {
            opacity: 1,
            filter: 'blur(0px)',
            transition: 'all 0.5s ease',
            delay: -0.3,
        })
        .to("#react", {
            opacity: 1,
            filter: 'blur(0px)',
            transition: 'all 0.5s ease',
            delay: -0.3,
        })
        .to("#node", {
            opacity: 1,
            filter: 'blur(0px)',
            transition: 'all 0.5s ease',
            delay: -0.3,
        })
        .to("#express", {
            opacity: 1,
            filter: 'blur(0px)',
            transition: 'all 0.5s ease',
            delay: -0.3,
        })
        .to("#mongo", {
            opacity: 1,
            filter: 'blur(0px)',
            transition: 'all 0.5s ease',
            delay: -0.3,
        })
        .to("#tailwind", {
            opacity: 1,
            filter: 'blur(0px)',
            transition: 'all 0.5s ease',
            delay: -0.3,
        })
        .to("#bootstrap", {
            opacity: 1,
            filter: 'blur(0px)',
            transition: 'all 0.5s ease',
            delay: -0.3,
        })
        .to("#reactnative", {
            opacity: 1,
            filter: 'blur(0px)',
            transition: 'all 0.5s ease',
            delay: -0.3,
        })
        .to("#Docker", {
            opacity: 1,
            filter: 'blur(0px)',
            transition: 'all 0.5s ease',
            delay: -0.3,
        })
        .to("#kubernetes", {
            opacity: 1,
            filter: 'blur(0px)',
            transition: 'all 0.5s ease',
            delay: -0.3,
        })
        .to("#aws", {
            opacity: 1,
            filter: 'blur(0px)',
            transition: 'all 0.5s ease',
            delay: -0.3,
        })
        .to("#gcp", {
            opacity: 1,
            filter: 'blur(0px)',
            transition: 'all 0.5s ease',
            delay: -0.3,
        })
        .to("#cicd", {
            opacity: 1,
            filter: 'blur(0px)',
            transition: 'all 0.5s ease',
            delay: -0.3,
        })
        .to("#git", {
            opacity: 1,
            filter: 'blur(0px)',
            transition: 'all 0.5s ease',
            delay: -0.3,
        })
        .to("#github", {
            opacity: 1,
            filter: 'blur(0px)',
            transition: 'all 0.5s ease',
            delay: -0.3,
        })
        .to("#typescript", {
            opacity: 1,
            filter: 'blur(0px)',
            transition: 'all 0.5s ease',
            delay: -0.3,
        });



        // Add more animations for other elements as needed

    });

    return (
<div className='parent'>

            <div className='skills w-[100%] h-[50vh] flex border-2 font-thin border-white flex-wrap gap-2 items-center text-white justify-center px-[10vw] py-[8vh]'>
                <h4 id="html" className='rounded-full blur-sm opacity-0 border-white border-[1px] px-6 py-1'>Html</h4>
                <h4 id="css" className='rounded-full blur-md opacity-0 border-white border-[1px] px-6 py-1'>Css</h4>
                <h4 id="js" className='rounded-full blur-md border-white opacity-0 border-[1px] px-6 py-1'>Js</h4>
                <h4 id="react" className='rounded-full blur-md border-white opacity-0 border-[1px] px-6 py-1'>React</h4>
                <h4 id="node" className='rounded-full blur-md border-white opacity-0 border-[1px] px-6 py-1'>Node</h4>
                <h4 id="express" className='rounded-full blur-md border-white opacity-0 border-[1px] px-6 py-1'>Express</h4>
                <h4 id="mongo" className='rounded-full blur-md border-white opacity-0 border-[1px] px-6 py-1'>Mongo</h4>
                <h4 id="tailwind" className='rounded-full blur-md border-white opacity-0 border-[1px] px-6 py-1'>Tailwind</h4>
                <h4 id="bootstrap" className='rounded-full blur-md border-white opacity-0 border-[1px] px-6 py-1'>Bootstrap</h4>
                <h4 id="reactnative" className='rounded-full blur-md border-white opacity-0 border-[1px] px-6 py-1'>React Native</h4>
                <h4 id="Docker" className='rounded-full blur-md border-white opacity-0 border-[1px] px-6 py-1'>Docker</h4>
                <h4 id="kubernetes" className='rounded-full blur-md border-white opacity-0 border-[1px] px-6 py-1'>Kubernetes</h4>
                <h4 id="aws" className='rounded-full blur-md border-white opacity-0 border-[1px] px-6 py-1'>Aws</h4>
                <h4 id="gcp" className='rounded-full blur-md border-white opacity-0 border-[1px] px-6 py-1'>Gcp</h4>
                <h4 id="cicd" className='rounded-full blur-md border-white opacity-0 border-[1px] px-6 py-1'>CI CD</h4>
                <h4 id="git" className='rounded-full blur-md border-white opacity-0 border-[1px] px-6 py-1'>Git</h4>
                <h4 id="github" className='rounded-full blur-md border-white opacity-0 border-[1px] px-6 py-1'>Github</h4>
                <h4 id='typescript' className='rounded-full blur-md border-white opacity-0 border-[1px] px-6 py-1'>TypeScript</h4>
            </div>
            </div>
      
    );
}

export default Skills;
