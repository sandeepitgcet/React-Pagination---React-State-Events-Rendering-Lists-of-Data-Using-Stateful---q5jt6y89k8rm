import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../api/fetchPosts';
import {Post} from './Post'
import { PaginationButtonsList } from './PaginationButtonsList';

const PostList = () => {
    const [page, setPage] = useState(1);
    const [posts , setPosts] = useState([]);
    useEffect(()=>{
        fetchPosts(page,5).then(data => setPosts(data))
        //console.log(data)
    },[page])
    
    return (
        <>
        
            {posts.map((post,index) => {
                return (
                    <Post key={index} post={post}/>
                )
            })}
            <PaginationButtonsList activePage={page} changePage={setPage}/>
        </>
    )
}

export { PostList }