import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "../Layout/Layout"
import { PostList } from "../PostList/PostList"
import { PostPage } from "../PostPage/PostPage"
import "./MainPage.css"
export function MainPage(){
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<div className='mainpage'><Layout></Layout></div>}>
                    <Route path="/posts" element={<PostList></PostList>}></Route>
                    <Route path="/posts/:id" element={<PostPage></PostPage>}></Route>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}