import { Post } from '../Post/Post';
import { useEffect, useState } from "react"
import "./PostList.css"

const posts = [
    {id: 0, category: "People", header: "Я попробовал арбуз, а Старий Бог мой хук на вкус", description: "zxc", image: "/static/5.jpg", author: "Новий пользиватель чата"},
    {id: 1, category: "People", header: "Пищи нет вкуснее каши, Старий Бог синок ...", description: "где лазери??", image: "/static/2.jpg", author: "Новий пользиватель чата"},
    {id: 2, category: "Stariy", header: "Че парни, неделю не играл, норм играю??", description: "ОТВЕЧАААЙТЕ МНЕ!!!!!", image: "/static/3.jpg", author: "Старий бог"},
    {id: 3, category: "People", header: "Сегодня мер разрушил ферму, Старий Бог глотает ...", description: "zxc", image: "/static/4.jpg", author: "Новий пользиватель чата"},
    {id: 4, category: "People", header: "Пока я ... на Юлю, Старий Бог ... бабулю", description: "Ну ти же ... , нет???", image: "/static/1.jpg", author: "Новий пользиватель чата"}
]

export function PostList(){

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
    }, [selectedCategory])

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

            {filteredPosts.map((post) => {
                return <Post key = {post.id} header = {post.header} description={post.description} image={post.image} author={post.author}> </Post>
                }
            )}
        </div>

    </div>
    )
}