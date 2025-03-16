import { useContext, useRef, useState } from "react";
import { usePosts } from "../../hooks/usePosts";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { likedPostContext } from "../../context/likedContext";
import { SearchPost } from "../SearchPost/SearchPost";
import "./Search.css";
import { Link } from "react-router-dom";

export function Search() {
  const [isModalOpen, setIsModalOpened] = useState<boolean>(false);
  const modalContainerRef = useRef<HTMLDivElement | null>(null);
  const { posts } = usePosts();
  const { setSearch, search } = useContext(likedPostContext);

  function inputOnFocus() {
    setIsModalOpened(true);
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div ref={modalContainerRef}>
      <input
        className="input"
        type="text"
        placeholder="Search posts..."
        onChange={handleInputChange}
        onFocus={inputOnFocus}
        onClick={(event) => {
          event.stopPropagation();
        }}
      />
      {isModalOpen && (
        <ModalWindow
          className="search-modal"
          allowModalCloseOutside={true}
          onClose={() => {
            setIsModalOpened(false);
          }}
          container={modalContainerRef.current ? modalContainerRef.current : undefined}
        >
          <div>
            <ul>
              {posts
                .filter((post) => {
                  if (search === "") {
                    return true
                  }
                  return post.name.toLowerCase().includes(search.toLowerCase());
                })
                .map((post) => (
                    <Link className="search-post" to={`/post/${post.id}`}>
                        <li
                            key={post.id}
                            onClick={() => {
                            setIsModalOpened(false);
                            }}
                            className="search-prodInfo"
                        >
                            <SearchPost
                            id={post.id}
                            name={post.name}
                            social_img={post.social_image}
                            />
                        </li>
                  </Link>
                ))}
            </ul>
          </div>
        </ModalWindow>
      )}
    </div>
  );
}