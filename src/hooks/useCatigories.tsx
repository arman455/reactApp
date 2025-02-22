import { useEffect, useState } from 'react'
import { usePosts } from './usePosts'

export function useCategories(){

    const [categories, setCategories] = useState()
    const [error, setError] = useState<string>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        async function getCategories(){
            try{
                const response = await fetch("http://localhost:8000/api/tags/all") //https://dev.to/api/articles
                const tags = await response.json();
                if (tags.status === 'error') {
                    setError(tags.message)
                } else {
                    setCategories(tags.data)
                }
            } catch(err){
                setError(`${err}`)
            } finally{
                setIsLoading(true)
            }
        }
        getCategories()
    }, [])
    return { categories: categories, error: error, isLoading: isLoading}

}