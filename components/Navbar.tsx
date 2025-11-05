'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  }
  return (
    <nav className="relative w-full flex items-center px-4 md:px-8 py-3 bg-gray-500">
      <button
        onClick={handleClick}
        aria-label={open ? 'Close the menu' : 'Open the menu'}
        aria-expanded={open}
        className={
          "flex flex-col justify-center items-center bg-gray-500 p-2 md:p-4 rounded focus:outline-none z-10"
        }
      >
        <span className={"block w-6 md:w-8 h-1 bg-white my-0.5 transition-transform " + (open ? 'translate-y-1 rotate-45' : '')} />
        <span className={"block w-6 md:w-8 h-1 bg-white my-0.5 transition-opacity " + (open ? 'opacity-0' : 'opacity-100')} />
        <span className={"block w-6 md:w-8 h-1 bg-white my-0.5 transition-transform " + (open ? '-translate-y-1 -rotate-45' : '')} />
      </button>

      <div
        className={`absolute top-full left-0 w-full bg-gray-600 flex flex-col items-center text-white font-semibold transition-all duration-500 ease-in-out
        ${open ? 'opacity-100 max-h-96 py-4' : 'opacity-0 max-h-0 py-0 pointer-events-none'}`}
      >
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/menu" onClick={() => setOpen(false)}>Menu</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>

      <img src="/logo_shinjuku.png" alt="Shinjuku Logo" className="h-10 md:h-16 absolute left-1/2 transform -translate-x-1/2 pointer-events-none" />

      <button className="ml-auto md:inline-block bg-white text-black py-1 md:py-3 px-2 md:px-4 rounded text-sm md:text-base font-semibold font-sans">Make a reservation</button>
    </nav>
  );
}