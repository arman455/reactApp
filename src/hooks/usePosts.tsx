import { useState, useEffect } from "react";

export interface IPost{
    id: number;
    name: string;
    tags: string[];
    author: string;
    description: string;
    social_image?: string;
    userId: number;
    likes?: number;
}

export function usePosts(){
    
    const [posts, setPosts] = useState<IPost[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()
    const [status, setStatus] = useState<number>()

    useEffect(() => {
        async function getPosts(){
            try{
                const response = await fetch("http://localhost:8000/api/post/all") //https://dev.to/api/articles
                const posts = await response.json();
                if (posts.status === 'error') {
                    setError(posts.message)
                } else {
                    setPosts(posts.data)
                }
            } catch(err){
                setError(`${err}`)
            } finally{
                setIsLoading(true)
            }
        }
        getPosts()
    },[]);
    
    return { posts: posts, isLoading: isLoading, error: error, status: status }
}