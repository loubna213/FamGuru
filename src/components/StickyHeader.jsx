import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import white_logo from '../assets/images/white-logo.png';
import black_logo from '../assets/images/black-logo.png';
import Button from './Button';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='z-[10] h-28 w-full absolute top-0 left-0 bg-transparent'>
      <div className="w-[95%] md:w-[90%] pl-4 pr-4 ml-auto mr-auto h-[95%] flex justify-between items-center">
        <div className='flex justify-between items-center w-full'>
          <Link to='/' className='flex justify-center items-center p-4'>
            <img className='logo-img' src={white_logo} alt="logo" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex justify-center items-center">
            <NavLink to='/ourstory' className='p-6 text-white hover:text-[#e91b63] transition-all duration-3000'>Our Story</NavLink>
            <NavLink to='/pricing' className='p-6 text-white hover:text-[#e91b63] transition-all duration-3000'>Pricing</NavLink>
            <NavLink to='/contact' className='p-6 text-white hover:text-[#e91b63] transition-all duration-3000'>Contact</NavLink>
          </nav>

          <Link className='bg-[#e91e63] text-[12px] hidden md:block text-white py-[10px] px-5 border-none rounded-3xl cursor-pointer hover:bg-[#d81b60]'>Download the App</Link>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-white text-3xl z-[40]" // Increase z-index of the icon
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes className="text-black" /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-full  bg-white transition-transform duration-500 ease-in-out z-[30] ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} 
        md:hidden`}
      >
        <div className="flex flex-col justify-start items-start p-8 h-full">
          <Link to="/" className="mb-8">
            <img src={black_logo} alt="logo" className="h-10" />
          </Link>
          <NavLink to='/ourstory' className='p-4 text-black text-lg'>Our Story</NavLink>
          <NavLink to='/pricing' className='p-4 text-black text-lg'>Pricing</NavLink>
          <NavLink to='/contact' className='p-4 text-black text-lg'>Contact</NavLink>
          <Button className="mt-8 w-full bg-[#e91b63] text-white text-lg py-4">
            Download the App
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
