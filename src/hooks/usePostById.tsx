import { useState, useEffect } from "react";
import { IPost } from "./usePosts"

export function usePostsById(id: number){

    const [post, setPost] = useState<IPost>()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string>()

    useEffect(() => {
        // зависишь от id
        // Number('dsadas') -> NaN
        // NaN является типом number
        // Функция не должна работать если id = NaN
        // еще лучше сделать вывод ошибки

        async function getPost(){
            try{
                setIsLoading(true)
                const response = await fetch(`http://localhost:8000/api/post/${id}`)
                const post = await response.json()
                // в тегах иначе обрабатываешь ответ
                // делай под один стиль
                const status = response.status
                if (status === 404){
                    setError("Post not found")
                    return
                }
                setPost(post)
            } catch(err){
                // syntax error?
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