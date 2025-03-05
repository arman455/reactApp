
import { useContext } from "react"
import { likedPostContext } from "../../context/likedContext"
import "./MainPage.css"

export function MainPage(){
    // useTitle тут
    // используем хук, а не сам контекст
    const { likesPost } = useContext(likedPostContext)

    return (
        <div className="main-page">
            <h1>Liked posts:</h1>
            <div className="liked-posts">
                {likesPost.map((post) => {
                    return (
                        <div key={post.id} className="liked-post">
                            <img height={170} width={350} src={post.social_image} alt=""/>
                            <h1>{post.name}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}