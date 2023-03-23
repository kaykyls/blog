import React, { useState } from 'react'
import Comments from '../comments/Comments'
import "./index.css"

const Post = (props) => {
    const [commentsIsOpen, setCommentsIsOpen] = useState(false)
    const [comments, setComments] = useState([])

    const getComments = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}/comments`)
        const data = await res.json()

        setComments(data)
    }

    const handleOpenComments = () => {
        getComments()
        setCommentsIsOpen(true)
    }


    return (
        <div className='post'>
            <div className="title"><h2>{props.title}</h2></div>
            <div className="body"><p>{props.body}</p></div>
            <div className="buttons">
                <div className="comments-button" onClick={handleOpenComments}>
                    <span className="material-symbols-outlined">chat_bubble</span>
                    <span>Comments</span>
                </div>
            </div>
            {commentsIsOpen && <Comments title={props.title} body={props.body} comments={comments} setCommentsIsOpen={setCommentsIsOpen}/>}
        </div>
    )
}

export default Post