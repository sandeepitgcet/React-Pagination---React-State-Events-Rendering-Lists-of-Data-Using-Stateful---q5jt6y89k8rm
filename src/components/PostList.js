import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../api/fetchPosts';
import {Post} from './Post'
import { PaginationButtonsList } from './PaginationButtonsList';

const PostList = () => {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [posts , setPosts] = useState([]);
    
    useEffect(()=>{
        setLoading(true)
        fetchPosts(page,5).then(data => setPosts(data)).then(()=>{
            setLoading(false)
            //console.log("kkk")
        })
       
        //console.log(data)

        
    },[page])
    
    return (
        <>
        
            {loading? <div className='loader'>Loading</div> : posts.map((post,index) => {
                return (
                    <Post key={index} post={post}/>
                )
            })}
            {!loading && <PaginationButtonsList activePage={page} changePage={setPage}/>}
            
        </>
    )
}

export { PostList }