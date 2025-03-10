import { Link, useParams } from "react-router-dom";
import { usePostsById } from "../../hooks/usePostById";
import "./PostPage.css";
import { Audio } from 'react-loader-spinner';

export function PostPage() {
    const params = useParams();
    const { post, isLoading, error } = usePostsById(Number(params.id));
    console.log("Post data:", post);

    if (isLoading) {
        return (
            <div className="postpage">
                <Audio height="80" width="80" color="grey" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClass="" />
            </div>
        );
    }

    if (error) {
        return <div className="postpage">{error}</div>;
    }

    if (!post) {
        return <div className="postpage">Post not found</div>;
    }

    return (
        <div className="postpage">
            <h1 className="postpagemaintext">{post.name}</h1>
            <img className="postpageimg" src={post.social_image} alt="" />
            <p className="postpagetext">Tags: {post.Tag.name}</p>
            <p className="postpagetext">Description: {post.description}</p>
            <Link to={"/posts"}>
                <button className="buttondetailed">Back</button>
            </Link>
        </div>
    );
}