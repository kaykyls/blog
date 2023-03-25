import React, { useState } from 'react'
import Comments from '../comments/Comments'
import { useNavigate, Link } from 'react-router-dom';
import "./index.css"

const Post = (props) => {
    const [commentsIsOpen, setCommentsIsOpen] = useState(false)
    const [comments, setComments] = useState([])

    const navigate = useNavigate();

    const getComments = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}/comments`)
        const data = await res.json()

        setComments(data)
    }

    const handleOpenComments = () => {
        getComments()
        setCommentsIsOpen(true)
        navigate(`/posts/${props.id}`, { state: { fromHome: true } })
    }

    return (
        <div className='post'>
            <div className="title"><Link to={`/posts/${props.id}`}><h2>{props.title}</h2></Link></div>
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