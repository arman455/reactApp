import { Post } from "./PostCard/PostCard"
import { usePosts } from "../../hooks/usePosts"
import { useEffect, useState } from "react"
import "./PostList.css"
import { Audio } from 'react-loader-spinner';

// const posts = [
//     {id: 0, category: "People", tags: ["123"], title: "Я попробовал арбуз, а Старий Бог мой хук на вкус", description: "zxc", social_image: "/static/5.jpg", user: {name:"Новий пользиватель чата"}},
//     {id: 1, category: "People", tags: ["123"], title: "Пищи нет вкуснее каши, Старий Бог синок ...", description: "где лазери??", social_image: "/static/2.jpg", user: {name:"Новий пользиватель чата"}},
//     {id: 2, category: "Stariy", tags: ["123"], title: "Че парни, неделю не играл, норм играю??", description: "ОТВЕЧАААЙТЕ МНЕ!!!!!", social_image: "/static/3.jpg", user: {name:"Старий бог"}},
//     {id: 3, category: "People", tags: ["123"], title: "Сегодня мер разрушил ферму, Старий Бог глотает ...", description: "zxc", social_image: "/static/4.jpg", user: {name:"Новий пользиватель чата"}},
//     {id: 4, category: "People", tags: ["123"], title: "Пока я ... на Юлю, Старий Бог ... бабулю", description: "Ну ти же ... , нет???", social_image: "/static/1.jpg", user: {name:"Новий пользиватель чата"}}
// ]

export function PostList(){
    const {posts, isLoading, error} = usePosts()

    const [filteredPosts, setFilteredPosts] = useState(posts)
    const [selectedCategory, setSelectedCategory] = useState("All")

    useEffect(()=>{
        if(selectedCategory==="All"){
            setFilteredPosts(posts)
        } else{
            setFilteredPosts(posts.filter((post)=>{
                return post.category === selectedCategory
            }))
        }
    }, [selectedCategory, posts])

    return (
    <div className='mainpostlistdiv'>

        <div className='selectdiv'>
            <select name="" id="mainselect" onChange={(event) => {
                setSelectedCategory(event.target.value)
            }}>
                <option value="All">All</option>
                <option value="Stariy">Stariy Bog</option>
                <option value="People">People</option>
            </select>
        </div>

        <div className='list'>

            { isLoading === true ? error === undefined ? filteredPosts.map((post) => {
                    return <Post key = {post.id} id={post.id} name = {post.title} description={post.description} image={post.social_image} author={post.user.name}> </Post>
                }) : (<h1>{error}</h1>) :
                (<Audio height="80" width="80" color="grey" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClass=""/>)}
            
        </div>

    </div>
    )
}