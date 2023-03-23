import React, { useEffect, useState } from 'react'
import Post from '../post/Post'
import Comments from '../comments/Comments'
import "./index.css"

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts()
  }, [])

  console.log(posts)
  
  const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()

    setPosts(data)
  }

  return (
    <div className='posts'>
      <div className="posts-wrapper">
        {posts.map(post => <Post key={post.id} title={post.title} body={post.body} id={post.id}/>)}
      </div>
      <Comments/>
    </div>
  )
}

export default Posts