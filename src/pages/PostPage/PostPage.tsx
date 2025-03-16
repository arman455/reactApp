import { Link, useParams } from "react-router-dom";
import { usePostsById } from "../../hooks/usePostById";
import "./PostPage.css";
import { Audio } from "react-loader-spinner";
import { useState, useEffect } from "react";

interface IComent {
  id: number;
  body: string;
  title: string;
  image: string;
}

export function PostPage() {
  const params = useParams();
  const { post, isLoading, error } = usePostsById(Number(params.id));

  const [comment, setComment] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [comments, setComments] = useState<IComent[]>(post?.Coment || []);
  const isAuthenticated = !!localStorage.getItem("user");

  // Ініціалізація коментарів після завантаження поста
  useEffect(() => {
    if (post?.Coment) {
      setComments(post.Coment);
    }
  }, [post]);

  // Додавання нового коментаря
  async function handlePostComment(e: React.FormEvent){
    e.preventDefault(); // Заборона перезавантаження сторінки

    if (!comment.trim()) {
      alert("Comment cannot be empty!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          postId: post?.id,
          body: comment,
          title: title.trim(),
          image: image.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add comment");
      }

      const newComment = await response.json();

      setComments([...comments, newComment]);
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("Failed to add comment. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div className="postpage">
        <Audio
          height="80"
          width="80"
          color="grey"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
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
      <img className="postpageimg" src={post.social_image} alt={post.name} />
      <p className="postpagetext">Tags: {post.Tags?.name || "No tags"}</p>
      <p className="postpagetext">
        Description: {post.description || "No description available"}
      </p>

      <div className="comments-section">
        <h2>Comments</h2>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="comment">
              {comment.title && <h3>{comment.title}</h3>}
              {comment.image && <img src={comment.image} alt={comment.title} />}
              <p>{comment.body}</p>
            </div>
          ))
        ) : (
          <p>No comments yet.</p>
        )}

        {isAuthenticated ? (
          <form onSubmit={handlePostComment} className="add-comment">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title (optional)"
            />
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image URL (optional)"
            />
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your comment..."
              required
            />
            <button type="submit">Add Comment</button>
          </form>
        ) : (
          <p>
            To leave a comment, please{" "}
            <Link to="/login" className="auth-link">
              log in
            </Link>
            .
          </p>
        )}
      </div>

      <Link to={"/posts"}>
        <button className="buttondetailed">Back</button>
      </Link>
    </div>
  );
}