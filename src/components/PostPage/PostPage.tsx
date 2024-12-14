import { ReactNode, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import "./PostPage.css"

interface IPostPage{
    children?: ReactNode
}
export function PostPage(props: IPostPage){

    const params = useParams();
    const [post, setPost] = useState(
        {
        id: 0,
        title: '',
        social_image: '',
        tags: [],
        description: ''
        })

    useEffect(() =>{
        async function getPost(){
            const response = await fetch(`https://dev.to/api/articles/${params.id}`)
            const post = await response.json()
            setPost(post)
        }
        getPost()
    }, [params.id])

    return (
        <div className="postpage">
            <h1 className="postpagemaintext">{post.title}</h1>
            <img className="postpageimg" src={post.social_image} alt="" />
            <p className="postpagetext">Tags: {post.tags.join(", ")}</p>
            <p className="postpagetext">Description: {post.description}</p>
            <Link to={"/posts"}>
                <button className="buttondetailed">Back</button>
            </Link>
        </div>
    )
}