import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";
import { PostListPage } from "../pages/PostListPage/PostListPage";
import { Layout } from "../shared/Layout/Layout";
import { PostPage } from "../pages/PostPage/PostPage";
import { Search } from "../shared/Search/Search";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegPage } from "../pages/RegPage/RegPage";
import { Profile } from "../shared/Profile/Profile";

export function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div className='mainpage'><Layout></Layout></div>}>
                    <Route path="/" element={<MainPage></MainPage>}></Route>
                    <Route path="/login" element={<LoginPage></LoginPage>}></Route>
                    <Route path="/reg" element={<RegPage></RegPage>}></Route>
                    <Route path="/posts" element={<PostListPage></PostListPage>}></Route>
                    <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
                    <Route path="/search" element={<Search></Search>}></Route>
                    <Route path="/profile" element={<Profile></Profile>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}