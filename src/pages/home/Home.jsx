import React from 'react'
import Posts from '../../components/posts/Posts'
import "./index.css"
import Sidebar from '../../components/sidebar/Sidebar'

const Home = () => {
  return (
    <div className='home-container'>
        <Sidebar/>
        <Posts/>
    </div>
  )
}

export default Home