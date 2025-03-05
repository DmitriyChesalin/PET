import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'


function PostIdPage() {
    const params = useParams()
    const [post, setPost] = useState()
    const [fetchPostById, isLoading] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)  
    })

    useEffect(() => {
fetchPostById(params.id)
    }, [fetchPostById, params.id, post])

    return (
        <div>
            <h1>вы на странице поста {params.id}</h1>
            {isLoading 
            ? <Loader/>
            : <div>{params.id}</div>
        }
            
        </div>


    )
}

export default PostIdPage