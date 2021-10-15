import React from 'react';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
const {id, title, body} = props.post
const history = useHistory()
const handlePost = (postId) =>{
    const url = `/comment/${postId}`
    history.push(url)
}

const stylePost ={
    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.2)',
    maxWidth: '350px',
    height:'250px',
    margin:'16px',
    padding:'15px',
    textAlign: 'center',
    fontFamily: 'arial',
    float:'left'
}
    return (
        <div style={stylePost}>
            <h3>ID: {id}</h3>
            <h4>Title: {title}</h4>
            <p>{body}</p>
            <button onClick={()=>handlePost(id)}>Show Comment</button>
        </div>
    );
};

export default Post;