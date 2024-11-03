import React, { useState, useRef,useEffect } from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Header = () => {

    const [navOpen, setNavOpen] = useState(false);
    const navRef = useRef(null); // Create a ref to track the Navbar element

    // Close nav when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if the click was outside of the Navbar component
            if (navRef.current && !navRef.current.contains(event.target)) {
                setNavOpen(false);
            }
        };

        // Add event listener to handle clicks outside of the navbar
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

  return (
    <header className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
        <div className='max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]'>
            
            <h1>
                <a href="/" className='logo'>
                <span className='material-symbols-rounded'>home</span>
                </a>
            </h1>

            <div ref={navRef}className='relative md:justify-self-center gap-3'>
                <button className='menu-btn md:hidden' onClick={()=>setNavOpen((prev)=>!prev)}>
                    <span className='material-symbols-rounded'>
                        {navOpen ? 'close' : 'menu'}
                    </span>
                </button>
                <Navbar navOpen={navOpen}/>
            </div>
            <Link className='btn btn-secondary max-md:hidden md:justify-self-end' to='/contact'>
                Contact Me
            </Link>

        </div>
    </header>
  )
}

export default Header
