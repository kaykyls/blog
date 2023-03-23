import React from 'react'
import Posts from '../../components/posts/Posts'
import "./index.css"
import LeftSidebar from '../../components/sidebar/Sidebar'

const Home = () => {
  return (
    <div className='home-container'>
        <LeftSidebar/>
        <Posts/>
    </div>
  )
}

export default Home