import React from 'react'
import "./index.css"
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="logo"><span>Blog</span></div>
      <div className="menu">
        <Link to={"/"} className="menu-item"><span className="material-symbols-outlined">Home</span><span>Home</span></Link>
      </div>
    </div>
  )
}

export default Sidebar