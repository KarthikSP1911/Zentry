import React from 'react'
import {useRef,useEffect, useState} from 'react'
import { TiLocationArrow } from "react-icons/ti";
import Button from './Button';
import { useWindowScroll } from 'react-use';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FaMusic } from "react-icons/fa";

const navItems = ['Nexus', 'Vault', 'Prlogue', 'About','Contact']
const Navbar = () => {

    const navRef = useRef(null);
    const audioRef = useRef(null);
    const [IsAudioPlaying, setIsAudioPlaying] = useState(false);
    const [IsIndicatorActive, setIsIndicatorActive] = useState(false);
    const {y: currentScrollY} = useWindowScroll(); // destructure y and rename to currentScrollY
    const [LastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);


    useEffect(() =>{
        if (currentScrollY === 0){
            setIsNavVisible(true);
            navRef.current.classList.remove('floating-nav');
        }
        else if(currentScrollY > LastScrollY){
            setIsNavVisible(false);
            navRef.current.classList.add('floating-nav');
        }
        else if(currentScrollY < LastScrollY){
            setIsNavVisible(true);
            navRef.current.classList.add('floating-nav');

        }
        console.log("->", currentScrollY);
        setLastScrollY(currentScrollY)
    },[currentScrollY, LastScrollY]);

    useGSAP(() => {
        gsap.to(navRef.current,{
            opacity: isNavVisible ? 1 : 0,
            y: isNavVisible ? 0: -100, 
            duration:0.3
        })
    },[isNavVisible])


    const toggleAudioIndicator = () => {
        setIsAudioPlaying(!IsAudioPlaying);
        setIsIndicatorActive((prev) => !prev);
    }

    useEffect(()=>{
        if(IsIndicatorActive){
            audioRef.current.play();
        }
        else{
            audioRef.current.pause();
        }
    })

  return (
    <div ref={navRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-1000'>
        <header className='absolute top-1/2 w-full -translate-y-1/2'>
            <nav className='flex items-center justify-between size-full p-4'>
                <div className="flex items-center gap-7">
                    <img src="img/logo.png" alt="logo.png"/>
                    <Button id="product-button" title="Products" rightIcon={<TiLocationArrow />} containerClass="bg-blue-100 md:flex hidden items-center justify-center gap-1"/>
                </div>
                <div className='flex h-full items-center'>
                    
                    <div className=" md:block text-white font-bold !font-4xl">
                        {navItems.map((item) => (
                            <a key={`#${item}`} href={`#${item.toLowerCase()}`} className="nav-hover-btn">
                                {item}
                            </a>
                        ))}
                    </div>
                    <button className='items-center flex ml-10 space-x-0.5' onClick={toggleAudioIndicator}>
                        <audio ref={audioRef} src='/audio/loop.mp3' loop/>
                            {[1,2,3,4].map((bar) => (
                            <div key={bar}
                             className={`indicator-line ${IsIndicatorActive ? 'active' : ''}`}
                             style={{animationDelay:`${bar*0.1}s`}}>

                            </div>

                            ))}
                        <div className='text-white px-1'>
                            <FaMusic />
                        </div>
                    </button>

                    
                </div>
            </nav>
        </header>
      
    </div>
  )
}

export default Navbar
