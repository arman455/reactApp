import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";
import { PostListPage } from "../pages/PostListPage/PostListPage";
import { Layout } from "../shared/Layout/Layout";
import { PostPage } from "../pages/PostPage/PostPage";
import { Search } from "../shared/Search/Search";

export function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div className='mainpage'><Layout></Layout></div>}>
                    <Route path="/" element={<MainPage></MainPage>}></Route>
                    <Route path="/posts" element={<PostListPage></PostListPage>}></Route>
                    <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
                    <Route path="/search" element={<Search></Search>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}