import React from 'react'
import "./index.css"
import { Link } from "react-router-dom";

const Sidebar = () => {
  const handleOpenMenu = () => {
    const menu = document.querySelector('.menu')
    menu.classList.toggle('active')
  }

  return (
    <div className='sidebar'>
      <div className="logo">
        <Link to={"/"}><span>Blog</span></Link>
        <button className="hamburger" onClick={handleOpenMenu}>
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
      <div className="menu">
        <Link onClick={handleOpenMenu} to={"/"} className="menu-item"><span className="material-symbols-outlined">Home</span><span>Home</span></Link>
      </div>
    </div>
  )
}

export default Sidebar