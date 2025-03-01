import { Post } from "./PostCard/PostCard";
import { usePosts } from "../../hooks/usePosts";
import { useEffect, useState } from "react";
import "./PostList.css";
import { Audio } from 'react-loader-spinner';
import { useCategories } from "../../hooks/useCatigories";

export function PostList() {
    const { posts, isLoading, error } = usePosts();
    const [filteredPosts, setFilteredPosts] = useState(posts);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const { tags } = useCategories();

    console.log("tags:", tags);

    useEffect(() => {
        if (selectedCategory === "All") {
            setFilteredPosts(posts);
        } else {
            setFilteredPosts(
                posts.filter((post) => 
                    post.Tag.name === selectedCategory
                )
            );
        }
    }, [selectedCategory, posts]);

    if (!tags) {
        return <div>Not tags!</div>;
    }

    return (
        <div className='mainpostlistdiv'>
            <div className='selectdiv'>
                <select
                    name="tags"
                    id="mainselect"
                    onChange={(event) => setSelectedCategory(event.target.value)}
                    value={selectedCategory}
                >
                    <option value="All">All</option>
                    {tags.map((tag) => (
                        <option key={tag.name} value={tag.name}>
                            {tag.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className='list'>
                {isLoading ? (
                    error ? (
                        <h1>{error}</h1>
                    ) : (
                        <Audio height="80" width="80" color="grey" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClass="" />
                    )
                ) : (
                    filteredPosts.map((post) => (
                        <Post
                            key={post.id}
                            id={post.id}
                            name={post.name}
                            description={post.description}
                            image={post.social_image}
                            userId={post.userId}
                            author={post.author}
                            Tag={post.Tag}
                        />
                    ))
                )}
            </div>
        </div>
    );
}