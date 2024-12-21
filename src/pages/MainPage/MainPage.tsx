import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "../../shared/Layout/Layout"
import { PostPage } from "../PostPage/PostPage"
import "./MainPage.css"
import { PostListPage } from "../PostListPage/PostListPage"
import { Search } from "../Search/Search"
import { useTitle } from "../../hooks/useTitle"

export function MainPage(){

    useTitle("Stariy_Bog")

    return (

        <BrowserRouter>
            <Routes>

                <Route path="/" element={<div className='mainpage'><Layout></Layout></div>}>
                    <Route path="/posts" element={<PostListPage></PostListPage>}></Route>
                    <Route path="/posts/:id" element={<PostPage></PostPage>}></Route>
                    <Route path="/search" element={<Search></Search>}></Route>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}