import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import img1 from'../images/post1.jpg'
import img2 from '../images/post2.jpg'
const stylePost ={
    textAlign: 'center'
}
const About = () => {
    const {postId} = useParams()
    const [post, setPost] =  useState({})
    const [comment, setComment] =  useState([])

    useEffect(()=>{
       fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
       .then(res => res.json())
       .then(data=> setPost(data))
    },[postId])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data=> setComment(data))
     },[postId])
     
    const {title, body} = post
  
    return (
        <div style={stylePost}>
            <h3>ID : {postId}</h3>
            <h4>{title}</h4>
            <h5>{body}</h5>
            <h2>comment : {comment.length}</h2>
            {
                comment.map(post => <Details post={post}></Details>)
            }
            {
             comment.length === 5? <img src={img2} alt="" /> : <img src={img1} alt="" />
            }

        </div>
    );
};

function Details(props) {
    const {name, email} = props.post
    return(
        <div style={stylePost}>
            <h3>Name : {name}</h3>
            <p>Email: {email}</p>
        </div>
    );
}

export default About;