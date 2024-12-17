import { useState, useEffect } from "react";

export interface IPost{
    id: number;
    title: string;
    category: string;
    tags: [];
    description: string;
    social_image: string;
    user: {name: string};
}

export function usePosts(){
    
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        async function getPosts(){
            const response = await fetch("https://dev.to/api/articles")
            const posts = await response.json();
            setPosts(posts)
        }
        getPosts()
    },[]);
    return { posts: posts}
}