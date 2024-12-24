import { useState, useEffect } from "react";
import { IPost } from "./usePosts"

export function usePostsById(id: number){

    const [post, setPost] = useState<IPost>()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string>()

    useEffect(() => {
        async function getPost(){
            try{
                setIsLoading(true)
                const response = await fetch(`https://dev.to/api/articles/${id}`)
                const post = await response.json()
                const status = response.status
                if (status === 404){
                    setError("Post not found")
                    return
                }
                setPost(post)
            } catch(err){
                if (err instanceof SyntaxError) {
                    setError("Failed to parse server response.");
                } else if (err instanceof Error) {
                    setError(err.message);
                } else {
                    const error = err as string
                    console.error(error)
                    setError(`${error}`)
                }
            } finally{
                setIsLoading(false)
            }
        }
        getPost()
    },[id])

    return {post: post, isLoading: isLoading, error: error}

}