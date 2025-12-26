import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='h-16 bg-purple-700 flex justify-between px-3 md:px-6 items-center text-white' >
            <div className='logo font-bold text-lg md:text-xl'>
                <Link href="/"><li>BitLinks</li></Link>
                
            </div>
            <ul className='flex justify-center gap-2 md:gap-4 items-center'>
                <Link href="/"><li className='hidden sm:block'>Home</li></Link>
                <Link href="/about"><li className='hidden sm:block'>About</li></Link>
                <Link href="/shorten"><li>Shorten</li></Link>
                <Link href="/contact"><li className='hidden sm:block'>Contact Us</li></Link>
                <li className='flex gap-1 md:gap-3'>
                    <Link href="/shorten"><button className='bg-purple-500 cursor-pointer rounded-lg shadow-lg p-2 md:p-3 py-1 font-bold text-sm md:text-base'>Try Now</button></Link>
                    <Link target='_blank' href="https://github.com/AnkurTechWiz/BitLink"><button className='bg-purple-500 cursor-pointer rounded-lg shadow-lg p-2 md:p-3 py-1 font-bold text-sm md:text-base hidden md:block'>Github</button></Link>

                </li>
            </ul>

        </nav>
    )
}

export default Navbar