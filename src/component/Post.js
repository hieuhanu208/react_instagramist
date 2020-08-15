import React  from 'react'
import '../component/css/Post.css'
import Avatar from '@material-ui/core/Avatar'

function Post({username, caption, imageUrl}) {

    
    return (
        <div className="post">
            <div className="post__header">
            <Avatar className="post__avatar"
             alt="rice"
             src= {imageUrl}/>
            <h3>{username}</h3>
            </div>
            
            <img src={imageUrl} className="post__image" />
    <h4 className="post__text"><strong >{username}</strong>{caption}</h4>
        </div>
    )
}

export default Post
