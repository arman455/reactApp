import { Link, useParams } from "react-router-dom"
import { usePostsById } from "../../hooks/usePostById"
import "./PostPage.css"

export function PostPage(){

    const params = useParams();
    const { post }= usePostsById(Number(params.id))

    return (
        <div className="postpage">
            <h1 className="postpagemaintext">{post?.title}</h1>
            <img className="postpageimg" src={post?.social_image} alt="" />
            <p className="postpagetext">Tags: {post?.tags.join(", ")}</p>
            <p className="postpagetext">Description: {post?.description}</p>
            <Link to={"/posts"}>
                <button className="buttondetailed">Back</button>
            </Link>
        </div>
    )
}