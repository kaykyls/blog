import React, { Fragment, useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import "./index.css"

const PostPage = () => {
    const [post, setPost] = useState()
    const [comments, setComments] = useState([])

    const getPost = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json()
        setPost(data[0])
        getComments(data[0].id)
      }
    
      const getComments = async (postId) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        const data = await res.json()
        setComments(data)
      }
    
      useEffect(() => {
        getPost()
      }, [])

  return (
    <Fragment>
        <Sidebar/>
        <div className="post-container">
            <div className="post-wrapper">
                <div className='post-page-post'>
                    <Link to={"/"} className="return-button">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </Link>
                    <div className="title">
                        <h2>{post?.title}</h2>
                    </div>
                    <div className="body">
                        <p>{post?.body}</p>
                    </div>
                </div>
                <div className="post-page-comments">
                    <h3>Comments</h3>
                    {comments.map(comment => <div key={comment.id} className='post-page-comment'>
                        <div className="post-page-comment-user">
                            <div className="post-page-comment-name"><h4>{comment.name}</h4></div>
                            <div className="post-page-comment-email"><p>{comment.email}</p></div>
                        </div>
                        <div className="post-page-comment-body"><p>{comment.body}</p></div>
                    </div>)}
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default PostPage