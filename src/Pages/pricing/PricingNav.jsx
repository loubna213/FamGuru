import React from 'react';
import { NavLink } from 'react-router-dom';

const PricingNav = () => {
  return (
    <nav className='mt-12 flex gap-4 bg-[#F7F7F7] px-4 py-2 rounded-[50px]'>
        <NavLink
            to='monthly'
            className={({ isActive }) =>
            `block p-4 rounded-[40px] w-28 text-center transition-all duration-3000 ${
                isActive ? 'bg-[#e91b63] text-white' : ''
            }`
            }
        >Monthly</NavLink>
        <NavLink
            to='yearly'
            className={({ isActive }) =>
            `block p-4 rounded-[40px] w-28 text-center transition-all duration-3000 ${
                isActive ? 'bg-[#e91b63] text-white' : ''
            }`
            }
        >Yearly</NavLink>
    </nav>
  )
}

export default PricingNav;