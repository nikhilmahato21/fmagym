import  { useState } from 'react';
import { Menu, X,  } from 'lucide-react';
import fmalogo from "../assets/FMA-PNG.png";
import { OfferTicker } from './OfferTicker';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
      <OfferTicker/>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-20 h-20 flex items-center justify-center text-white font-bold italic"><img src={fmalogo}/></div>
            {/* <span className="text-xl font-black tracking-tighter uppercase">FMA GYM</span> */}
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide uppercase">
            <a href="#home" className="hover:text-zinc-500 transition-colors">Home</a>
            <a href="#training" className="hover:text-zinc-500 transition-colors">Training</a>
            <a href="#membership" className="hover:text-zinc-500 transition-colors">Membership</a>
            <a href="#contact" className="hover:text-zinc-500 transition-colors">Contact</a>
          </div>

          {/* <div className="hidden md:flex items-center gap-4">
             <div className="relative">
                <input type="text" placeholder="Search..." className="bg-zinc-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black w-32 focus:w-48 transition-all" />
             </div>
          </div> */}

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-zinc-100 p-6 flex flex-col gap-4">
            <a href="#home" className="text-lg font-bold">Home</a>
            <a href="#training" className="text-lg font-bold">Training</a>
            <a href="#membership" className="text-lg font-bold">Membership</a>
            <a href="#contact" className="text-lg font-bold">Contact</a>
          </div>
        )}
      </nav></div>
  )
}
