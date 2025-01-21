import { useState, useEffect } from "react";

export interface IPost{
    id: number;
    title: string;
    category?: string;
    tags?: string[];
    description: string;
    social_image: string;
    user: {name: string};
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
                const response = await fetch("https://dev.to/api/articles")
                const posts = await response.json();
                const satatus = response.status
                setPosts(posts)
                setStatus(satatus)
            } catch(err){
                if (err instanceof SyntaxError) {
                    setError("Failed to parse server response.");
                } else if (err instanceof Error) {
                    setError(err.message);
                } else {
                    const error = err as string
                    setError(`${error}`)
                }
            } finally{
                setIsLoading(true)
            }
        }
        getPosts()
    },[]);
    
    return { posts: posts, isLoading: isLoading, error: error, status: status }
}