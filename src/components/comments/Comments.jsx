import React from 'react'
import "./index.css"
import Comment from '../comment/Comment'
import { useNavigate, useLocation } from 'react-router-dom'

const Comments = (props) => {
  const location = useLocation()
  const navigate = useNavigate()

  const closeComments = () => {
    props.setCommentsIsOpen(false)
    if(location.pathname === "/") return
    navigate("/")
  }

  const handleWrapperClick = (e) => {
    e.stopPropagation();
  }

  if(location.pathname === "/") {
    closeComments()
  }

  return (
    <div className='comments-modal' onClick={closeComments}>
        <div className="comments-wrapper" onClick={handleWrapperClick}>
          <div className="post-info">
            <div className="info-title"><h2>{props.title}</h2></div>
            <div className="info-body"><p>{props.body}</p></div>
          </div>
          <div className="comments">
            <h3 className='comments-text'>Comments</h3>
            {props.comments.map(comment => <Comment key={comment.id} name={comment.name} email={comment.email} body={comment.body}/>)}
          </div>
          <div onClick={closeComments} className="close"><span className="material-symbols-outlined">close</span></div>
        </div>
    </div>
  )
}

export default Comments