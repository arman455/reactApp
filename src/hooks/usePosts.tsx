import { useState, useEffect } from "react";

export interface IPost{
    id: number;
    name: string;
    Tags: { id: number, name: string};
    Coment: { id: number, body: string, title: string, image: string}[];
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

    useEffect(() => {
        async function getPosts(){
            try{
                const response = await fetch("http://localhost:8000/api/post/all") //https://dev.to/api/articles
                const posts = await response.json();
                if (posts.status === 'success') {
                    setPosts(posts.data)
                } else {
                    setError(posts.message) 
                }
            } catch(err){
                setError(`${err}`)
            } finally{
                setIsLoading(false)
            }
        }
        getPosts()
    },[]);
    
    return { posts: posts, isLoading: isLoading, error: error }
}