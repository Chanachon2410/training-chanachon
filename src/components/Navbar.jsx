import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from '../pages/Home'

const Navbar = () => {
  return (
    <nav className="bg-blue-700 font-bold p-5 shadow-md flex justify-between items-center">
      <div className="flex items-center ml-10">
        {/* Logo */}
        <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="Logo" className="h-8 w-8 mr-2" />

        {/* Brand Text */}
        <span className="text-black font-semibold text-lg">NVC Training Center</span>
      </div>

      <ul className="flex space-x-4 mr-10">
        <li><NavLink to="/" className="text-black font-bold">หน้าหลัก</NavLink></li>
        <li><NavLink to="/course" className="text-black font-bold">หลักสูตรที่เปิดสอน</NavLink></li>
        <li><NavLink to="/contact" className="text-black font-bold">ติดต่อ</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar