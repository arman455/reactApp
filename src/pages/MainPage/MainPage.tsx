import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "../../shared/Layout/Layout"
import { PostPage } from "../PostPage/PostPage"
import "./MainPage.css"
import { PostListPage } from "../PostListPage/PostListPage"
import { Search } from "../Search/Search"
import { useTitle } from "../../hooks/useTitle"

import { createContext, useState } from "react"
import { IPost } from "../../hooks/usePosts"

interface ILikesPostProps{
    likesPost: IPost[];
    addLikesItem: (post: IPost) => void;
}

const valueInit: ILikesPostProps[] = []
export const likedPostContext = createContext<ILikesPostProps[]>(valueInit)

export function MainPage(){

    useTitle("Stariy_Bog")

    const [likesPost, setLikesPost] = useState<IPost[]>([]);

    const addLikesItem = (post: IPost) => {
        setLikesPost((prev) => {
          const isLiked = prev.some((p) => p.id === post.id)

          if (isLiked) {
            return prev.filter((p) => p.id !== post.id) // -
          } else {
            return [...prev, post] // +
          }
        });
      };

    return (
        
        <likedPostContext.Provider value={[{likesPost, addLikesItem}]}>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<div className='mainpage'><Layout></Layout></div>}>
                        <Route path="/posts" element={<PostListPage></PostListPage>}></Route>
                        <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
                        <Route path="/search" element={<Search></Search>}></Route>
                    </Route>

                </Routes>
            </BrowserRouter>
        </likedPostContext.Provider>
    )
}