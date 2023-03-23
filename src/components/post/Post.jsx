import React from 'react'
import "./index.css"

const Post = (props) => {
    const openComments = () => {
        getComments()
    }

    const getComments = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}/comments`)
        const data = await res.json()

        console.log(data)
    }

    return (
        <div className='post'>
            <div className="title"><h2>{props.title}</h2></div>
            <div className="body"><p>{props.body}</p></div>
            <div className="buttons">
                <div className="comments" onClick={openComments}>
                    <span class="material-symbols-outlined">chat_bubble</span>
                    <span>Comments</span>
                </div>
            </div>
        </div>
    )
}

export default Post