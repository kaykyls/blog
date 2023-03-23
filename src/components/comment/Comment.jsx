import React from 'react'
import "./index.css"

const Comment = (props) => {
  return (
    <div className='comment'>
        <div className="comment-user">
            <div className="comment-name"><h3>{props.name}</h3></div>
            <div className="comment-email"><p>{props.email}</p></div>
        </div>
        <div className="comment-body"><p>{props.body}</p></div>
    </div>
  )
}

export default Comment