
import { useContext } from "react"
import { likedPostContext } from "../../context/likedContext"
import "./MainPage.css"

export function MainPage(){
    const { likesPost } = useContext(likedPostContext)

    return (
        <div className="main-page">
            <h1>Liked posts:</h1>
            <div className="liked-posts">
                {likesPost.map((post) => {
                    return (
                        <div key={post.id} className="liked-post">
                            <img height={170} width={350} src={post.social_image} alt=""/>
                            <h1>{post.title}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}