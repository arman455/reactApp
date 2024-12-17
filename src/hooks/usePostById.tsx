import { useState, useEffect } from "react";
import { IPost } from "./usePosts"

export function usePostsById(id: number){

    const [post, setPost] = useState<IPost>()

    useEffect(() => {
        async function getPost(){
            const response = await fetch(`https://dev.to/api/articles/${id}`)
            const post = await response.json()
            setPost(post)
        }
        getPost()
    },[id])

    return {post: post}

}