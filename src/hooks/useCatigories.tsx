import { useEffect, useState } from 'react'

interface ITag{
    id: number;
    name: string;
}

export function useCategories(){

    const [tags, setTags] = useState<ITag[]>([])
    const [error, setError] = useState<string>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        async function getTags(){
            try{
                const response = await fetch("http://localhost:8000/api/tags/all") //https://dev.to/api/articles
                const tags = await response.json();
                if (tags.status === 'error') {
                    setError(tags.message)
                } else {
                    setTags(tags.data)
                }
            } catch(err){
                setError(`${err}`)
            } finally{
                setIsLoading(true)
            }
        }
        getTags()
    }, [])
    return { tags: tags, error: error, isLoading: isLoading}

}