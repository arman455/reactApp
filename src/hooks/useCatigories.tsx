import { useEffect, useState } from 'react'
import { usePosts } from './usePosts'

export function useCategories(){

    const [categories, setCategories] = useState<string | undefined>()
    const { posts } = usePosts()

    useEffect(() => {
        async function getCategories(){
            const categories = posts.map( (post) => {
                if (post.category) {
                    return post.tags
                } else{
                    return 
                }
            })
            console.log(categories) 
            // setCategories(categories)
        }
        getCategories()
    }, [])
    return { categories: categories}

}