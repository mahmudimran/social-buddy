import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([])
    const fakeData = ()=>{
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data.slice(0,18)))
    }
    useEffect( fakeData,[])

    return (
        <div>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;