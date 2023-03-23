import React from 'react'
import "./index.css"
import Comment from '../comment/Comment'

const Comments = (props) => {
  const closeComments = () => {
    props.setCommentsIsOpen(false)
  }

  const handleWrapperClick = (e) => {
    e.stopPropagation();
  }

  return (
    <div className='comments-modal' onClick={closeComments}>
        <div className="comments-wrapper" onClick={handleWrapperClick}>
          <div className="post-info">
            <div className="info-title"><h2>{props.title}</h2></div>
            <div className="info-body"><p>{props.body}</p></div>
          </div>
          <div className="comments">
            {props.comments.map(comment => <Comment key={comment.id} name={comment.name} email={comment.email} body={comment.body}/>)}
          </div>
          <div onClick={closeComments} className="close"><span className="material-symbols-outlined">close</span></div>
        </div>
    </div>
  )
}

export default Comments